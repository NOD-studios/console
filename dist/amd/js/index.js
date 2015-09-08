define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'babel-runtime/helpers/interop-require-default', 'app-root-path', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment', 'console'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeHelpersToConsumableArray, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _babelRuntimeCoreJsObjectDefineProperty, _sourceMapSupportRegister, _cardinal, _babelRuntimeHelpersInteropRequireDefault, _appRootPath, _circularJson, _path, _os, _decorateThis, _autobindDecorator, _nodEnvironment, _console2) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _highlighter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_cardinal);

  var _appRootPath2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appRootPath);

  var _json = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_circularJson);

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _os2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_os);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var _console3 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_console2);

  var PRIVATE = (0, _babelRuntimeCoreJsSymbol['default'])('PRIVATE');

  var config = new _nodEnvironment.Environment({
    root: _path2['default'].resolve('.')
  }).config || {
    console: {}
  };

  var standart = {
    output: function output() {},
    error: function error() {}
  };

  if (console) {
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: console.log.bind(console),
      error: console.error.bind(console)
    });
  }

  if (process) {
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: process.stdout.write.bind(process.stdout),
      error: process.stderr.write.bind(process.stdout)
    });
  }

  var Console = (function () {
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Console, [{
      key: 'setOptions',
      decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)({
        standart: (0, _decorateThis.Optional)(Object),
        enabled: (0, _decorateThis.Optional)(Boolean),
        logTypes: (0, _decorateThis.Optional)(Boolean),
        config: (0, _decorateThis.Optional)(Object),
        highlight: (0, _decorateThis.Optional)(Object),
        json: (0, _decorateThis.Optional)(Object),
        stackDepth: (0, _decorateThis.Optional)(Number)
      }))],
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        options = (0, _babelRuntimeCoreJsObjectAssign['default'])(this[PRIVATE].options, this.defaults, options);
        this.level = options.level;
        return options;
      }
    }, {
      key: 'options',
      get: function get() {
        return this[PRIVATE].options;
      },
      set: function set() {
        return this.setOptions.apply(this, arguments);
      }
    }]);

    function Console() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Console);
      this.levels = {
        error: 1,
        warn: 2,
        info: 3,
        log: 4,
        debug: 5
      };
      this.defaults = {
        enabled: true,
        logTypes: false,
        level: 'warn',
        highlight: _highlighter['default'].highlight.bind(_highlighter['default']),
        stackDepth: 7,
        standart: standart,
        config: config,
        json: _json['default']
      };

      (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(this, PRIVATE, {
        enumerable: false,
        value: {
          options: {},
          level: null
        }
      });
      this.options = options;

      if (this.options.config.console) {
        if (typeof this.options.config.console.level !== 'undefined') {
          this.level = this.options.config.console.level;
        }
        if (typeof this.options.config.console.enabled === 'booelan') {
          this.options.enabled = this.options.config.console.enabled;
        }
      }

      if (typeof this.options.config.silent === 'boolean') {
        this.options.enabled = this.options.config.silent ? false : true;
      }

      this.info(this.constructor.name + ': Initialized.');
    }

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Console, [{
      key: 'typify',
      decorators: [(0, _decorateThis.returns)(Object)],
      value: function typify() {
        var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        var type = typeof param;
        return (0, _babelRuntimeHelpersDefineProperty['default'])({}, type, param);
      }
    }, {
      key: 'stringify',
      decorators: [(0, _decorateThis.returns)(String)],
      value: function stringify() {
        var _this = this;

        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        if (this.logTypes === true) {
          params = params.map(function (param) {
            return _this.typify(param);
          });
        }
        return this.options.json.stringify(params, null, 2);
      }
    }, {
      key: 'highlight',
      decorators: [(0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), (0, _decorateThis.param)(String)],
      value: function highlight() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        try {
          return this.options.highlight(params);
        } catch (error) {
          this.standart('error', 'error', error);
          return false;
        }
      }
    }, {
      key: 'stack',
      decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(Number)],
      value: function stack() {
        var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];

        var stack = new Error().stack;
        return stack.split(_os2['default'].EOL)[stackDepth].replace("\t", '').trim();
      }
    }, {
      key: 'getLevel',
      decorators: [(0, _decorateThis.returns)(String)],
      value: function getLevel() {
        var value = this[PRIVATE].level,
            property = undefined;
        for (property in this.levels) {
          if (this.levels.hasOwnProperty(property)) {
            if (this.levels[property] === value) {
              return property;
            }
          }
        }
        return property;
      }
    }, {
      key: 'setLevel',
      decorators: [(0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean))],
      value: function setLevel() {
        var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

        if (typeof level === 'string') {
          if (this.levels[level]) {
            return this[PRIVATE].level = this.levels[level];
          }
        }
        if (typeof level === 'number') {
          level = this.getLevel();
          if (level !== false) {
            this[PRIVATE].level = level;
          }
        }
        return false;
      }
    }, {
      key: 'format',
      decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), (0, _decorateThis.param)((0, _decorateThis.Optional)(String))],
      value: function format() {
        var stack = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var level = arguments.length <= 1 || arguments[1] === undefined ? this.level : arguments[1];
        var params = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

        level = level.toUpperCase();
        var output = '' + _os2['default'].EOL + level + ': ' + stack + _os2['default'].EOL + params + _os2['default'].EOL;
        return output;
      }
    }, {
      key: 'checkLevel',
      decorators: [(0, _decorateThis.returns)(Boolean), _autobind['default']],
      value: function checkLevel() {
        var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

        if (this.levels[level] <= this.levels[this.level]) {
          return true;
        }
        return false;
      }
    }, {
      key: 'standart',
      decorators: [(0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), _autobind['default']],
      value: function standart() {
        for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          params[_key2 - 2] = arguments[_key2];
        }

        var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];
        var method = arguments.length <= 1 || arguments[1] === undefined ? 'output' : arguments[1];

        if (this.options.enabled !== true) {
          return false;
        }
        if (this.checkLevel(level) === false) {
          return false;
        }

        params = this.stringify.apply(this, (0, _babelRuntimeHelpersToConsumableArray['default'])(params));
        params = this.highlight(params);
        params = this.format(this.stack(), level, params);

        return this.options.standart[method](params);
      }
    }, {
      key: 'debug',
      decorators: [_autobind['default']],
      value: function debug() {
        for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          params[_key3] = arguments[_key3];
        }

        return this.standart.apply(this, ['debug', 'output'].concat(params));
      }
    }, {
      key: 'log',
      decorators: [_autobind['default']],
      value: function log() {
        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        return this.standart.apply(this, ['log', 'output'].concat(params));
      }
    }, {
      key: 'info',
      decorators: [_autobind['default']],
      value: function info() {
        for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          params[_key5] = arguments[_key5];
        }

        return this.standart.apply(this, ['info', 'output'].concat(params));
      }
    }, {
      key: 'warn',
      decorators: [_autobind['default']],
      value: function warn() {
        for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          params[_key6] = arguments[_key6];
        }

        return this.standart.apply(this, ['warn', 'error'].concat(params));
      }
    }, {
      key: 'error',
      decorators: [_autobind['default']],
      value: function error() {
        for (var _len7 = arguments.length, params = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          params[_key7] = arguments[_key7];
        }

        return this.standart.apply(this, ['error', 'error'].concat(params));
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getLevel();
      },
      set: function set() {
        return this.setLevel.apply(this, arguments);
      }
    }]);
    return Console;
  })();

  exports.Console = Console;

  var console = new Console();
  var error = console.error;
  var warn = console.warn;
  var info = console.info;
  var log = console.log;
  var debug = console.debug;
  exports.error = error;
  exports.warn = warn;
  exports.info = info;
  exports.log = log;
  exports.debug = debug;
  exports['default'] = console;
});
//# sourceMappingURL=data:application/json;base64,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USxTQUFLLE1BQU0sRUFBQyxDQUFDO09BQ25EOzs7O2FBR0csZ0JBQVk7MkNBQVIsTUFBTTtBQUFOLGdCQUFNOzs7QUFDWixlQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLEdBQVUsTUFBTSxFQUFFLE9BQU8sU0FBSyxNQUFNLEVBQUMsQ0FBQztPQUNsRDs7OzthQUdJLGlCQUFZOzJDQUFSLE1BQU07QUFBTixnQkFBTTs7O0FBQ2IsZUFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxHQUFVLE9BQU8sRUFBRSxPQUFPLFNBQUssTUFBTSxFQUFDLENBQUM7T0FDbkQ7OztXQWxHUSxlQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDeEI7V0FnQlEsZUFBWTtBQUNuQixlQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLFlBQW9CLENBQUM7T0FDakM7O1dBbElVLE9BQU87Ozs7O0FBbU5wQixNQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO01BQ2YsS0FBSyxHQUE2QixPQUFPLENBQXpDLEtBQUs7TUFBRSxJQUFJLEdBQXVCLE9BQU8sQ0FBbEMsSUFBSTtNQUFFLElBQUksR0FBaUIsT0FBTyxDQUE1QixJQUFJO01BQUUsR0FBRyxHQUFZLE9BQU8sQ0FBdEIsR0FBRztNQUFFLEtBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Ozs7Ozt1QkFDM0IsT0FBTyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgYXBwUm9vdFBhdGggZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcbmltcG9ydCBfY29uc29sZSBmcm9tICdjb25zb2xlJztcblxuY29uc3QgUFJJVkFURSA9IFN5bWJvbCgnUFJJVkFURScpO1xuXG5sZXQgY29uZmlnID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxufSkpLmNvbmZpZyB8fCB7XG4gIGNvbnNvbGUgOiB7fVxufTtcblxubGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICBsZXZlbCAgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCAgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgc3RhbmRhcnQsXG4gICAgY29uZmlnLFxuICAgIGpzb25cbiAgfTtcblxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLm9wdGlvbnM7XG4gIH1cblxuICBzZXQgb3B0aW9ucyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHN0YW5kYXJ0ICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgY29uZmlnICAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgaGlnaGxpZ2h0ICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgc3RhY2tEZXB0aCA6IG9wdGlvbmFsKE51bWJlcilcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzW1BSSVZBVEVdLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBSSVZBVEUsIHtcbiAgICAgIGVudW1lcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlICAgICAgOiB7XG4gICAgICAgIG9wdGlvbnMgOiB7fSxcbiAgICAgICAgbGV2ZWwgICA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkID09PSAnYm9vZWxhbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2soc3RhY2tEZXB0aCA9IHRoaXMub3B0aW9ucy5zdGFja0RlcHRoKSB7XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgcmV0dXJuIHN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtzdGFja0RlcHRoXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BSSVZBVEVdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLmxldmVsID0gdGhpcy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cbn1cblxubGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xuZXhwb3J0IGRlZmF1bHQgY29uc29sZTtcbiJdfQ==