import fs from 'fs';
import del from 'del';
import path from 'path';
import gulp from 'gulp';
import global from 'global-object';
import vinylPaths from 'vinyl-paths';
import childProcess from 'child_process';
import loadPlugins from 'gulp-load-plugins';
import npmScriptSync from 'gulp-npm-script-sync';

const $ = loadPlugins();

let exec = (command = '') => {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderror) => {
      if (stdout) {
        process.stdout.write(stdout);
      }
      if (stderror) {
        process.stderr.write(stderror);
      }
      if (error !== null) {
        reject(error);
      }
      resolve();
    })
  });
};

let options = {
  eslint : {},
  babel : {},
  pkg : {}
};

const paths = {
  root : path.normalize('.'),
  dist : path.normalize('./dist/'),
  src : path.normalize('./src/'),
  js : path.join('./src/', '/**/*.js')
};

gulp.task('options', () => {
  let promises = [],
    readFile = (fileName, propertyName, resolve, reject) => {
      fs.readFile(path.normalize(`${paths.root}/${fileName}`), {
        encoding : 'UTF-8'
      }, (error, content) => {
        if (error) {
          reject(error);
        }
        resolve(options[propertyName] = JSON.parse(content));
      })
    };

  promises.push(new Promise((resolve, reject) => {
    readFile('.babelrc', 'babel', resolve, reject);
  }));

  promises.push(new Promise((resolve, reject) => {
    readFile('.eslintrc', 'eslint', resolve, reject);
  }));

  promises.push(new Promise((resolve, reject) => {
    readFile('package.json', 'pkg', resolve, reject);
  }));

  return Promise.all(promises)
});

gulp.task('clean', () => {
  return gulp.src(paths.dist)
    .pipe(vinylPaths(del));
});

gulp.task('lint', gulp.series('options', () => {
  return gulp.src(paths.js)
    .pipe($.changed(paths.dist))
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe($.eslint(options.eslint))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe($.eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe($.eslint.failOnError());
}));

gulp.task('build-es', gulp.series('options', () => {
  return gulp.src(paths.js)
    .pipe($.changed(paths.dist))
    .pipe(gulp.dest(path.join(paths.dist, 'es')));
}));

gulp.task('build-commonjs', gulp.series('options', () => {
  let babelOptionsCommonJs = options.babel;
  babelOptionsCommonJs.plugins.push('transform-es2015-modules-commonjs');

  return gulp.src(paths.js)
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptionsCommonJs))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(paths.dist, 'commonjs')));
}));

gulp.task('build-amd', gulp.series('options', () => {
  let babelOptions = options.babel;
  babelOptions.plugins.push('transform-es2015-modules-amd');

  return gulp.src(paths.js)
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptions))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(paths.dist, 'amd')));
}));

gulp.task('build-umd', gulp.series('options', () => {
  let babelOptions = options.babel;
  babelOptions.plugins.push('transform-es2015-modules-umd');

  return gulp.src(paths.js)
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptions))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(paths.dist, 'umd')));
}));

gulp.task('build-systemjs', gulp.series('options', () => {
  let babelOptionsSystemJs = options.babel;
  babelOptionsSystemJs.plugins.push('transform-es2015-modules-systemjs');

  return gulp.src(paths.js)
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptionsSystemJs))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(paths.dist, 'systemjs')));
}));

gulp.task('build', gulp.series(
  'lint',
  gulp.parallel('build-es', 'build-commonjs', 'build-amd', 'build-umd', 'build-systemjs')
));

gulp.task('run-instance', gulp.series('build', () => {
  let
    invoked = false,
    process = childProcess.fork(path.join(paths.dist, 'commonjs', 'instance.js'));

  return new Promise((resolve, reject) => {

    process.on('error', (error) => {
      if (invoked) {
        return false;
      }
      invoked = true;
      reject(error);
    });

    process.on('exit', (code) => {
      if (invoked) {
        return false;
      }
      invoked = true;
      let error = code === 0 ? null : new Error(`exit code ${code}`);
      if (error) {
        reject(error);
      }
      resolve();
    });

  });
}));

gulp.task('watch', () => {
  return gulp
    .src(paths.js)
    .pipe($.debug({
      title : 'Started to watching files'
    }))
    .pipe($.watch(paths.js, () => {
      gulp.series('build');
    }))
    .pipe($.debug({
      title : 'changed files'
    }));
});

gulp.task('preversion', gulp.series('build', () => {
  return exec('git add -A');
}));

gulp.task('postpublish', () => {
  return exec('git push && git push --tags');
});

gulp.task('postversion', gulp.series('postpublish'));

gulp.task('prepublish', () => {
  return exec('npm run build && git add -A');
});

gulp.task('test', gulp.series('run-instance'));

gulp.task(
  'default',
  gulp.series(
    'build',
    'run-instance',
    'watch'
  )
);

$.npmScriptSync(gulp);
