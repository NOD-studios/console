import fs from 'fs';
import del from 'del';
import path from 'path';
import gulp from 'gulp';
import assign from 'object.assign';
import vinylPaths from 'vinyl-paths';
import runSequence from 'run-sequence';
import childProcess from 'child_process';
import loadPlugins from 'gulp-load-plugins';
import npmScriptSync from 'gulp-npm-script-sync';

Object.assign = Object.assign || assign;

const $ = loadPlugins();

let parseDotFile = (fileName) => {
  return JSON.parse(fs.readFileSync(path.normalize(`./.${fileName}`), {
    encoding : 'UTF-8'
  }));
};

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
}

const options = {
  eslint : parseDotFile('eslintrc'),
  babel  : parseDotFile('babelrc')
};

const paths = {
  dist : path.normalize('./dist/'),
  src : path.normalize('./src/'),
  js : path.join(path.normalize('./src/'), '/**/*.js')
};

gulp.task('clean', () => {
  return gulp.src(paths.dist)
    .pipe(vinylPaths(del));
});

gulp.task('lint', () => {
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
});

gulp.task('build-es7', () => {
  return gulp.src(paths.js)
    .pipe($.changed(paths.dist))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build-commonjs', () => {
  let dest = path.join(paths.dist, 'commonjs');
  return gulp.src(paths.js)
    .pipe($.changed(dest))
    // .pipe($.sourcemaps.init())
    .pipe($.babel(Object.assign({}, options.babel, {
      modules : 'common'
    })))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('build-amd', () => {
  let dest = path.join(paths.dist, 'amd');
  return gulp.src(paths.js)
    .pipe($.changed(dest))
    // .pipe($.sourcemaps.init())
    .pipe($.babel(Object.assign({}, options.babel, {
      modules : 'amd'
    })))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('build-system', () => {
  let dest = path.join(paths.dist, 'system');
  return gulp.src(paths.js)
    .pipe($.changed(dest))
    // .pipe($.sourcemaps.init())
    .pipe($.babel(Object.assign({}, options.babel, {
      modules : 'system'
    })))
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dest));
});

gulp.task('run-instance', () => {
  let invoked = false;
  let process = childProcess.fork(path.join(__dirname, 'instance.js'));

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
});

gulp.task('build', ['lint'], (callback) => {
  runSequence(
    ['build-es7', 'build-commonjs', 'build-amd', 'build-system'],
    'run-instance',
    callback
  );
});

gulp.task('watch', () => {
  return gulp
    .src(paths.js)
    .pipe($.watch(paths.js, () => {
      gulp.start('build');
    }))
    .pipe($.debug({
      title : 'changed files'
    }));
});

gulp.task('preversion', ['build'], () => {
  return exec('git add -A');
});

gulp.task('postversion', ['postpublish']);

gulp.task('prepublish', () => {
  return exec('npm run build && git add -A');
});

gulp.task('postpublish', () => {
  return exec('git push && git push --tags');
});

gulp.task('test', ['run-instance']);

gulp.task('default', ['lint'], (callback) => {
  return runSequence(
    'clean',
    ['build-es7', 'build-commonjs', 'build-amd', 'build-system'],
    'watch',
    callback
  );
});

$.npmScriptSync(gulp);
