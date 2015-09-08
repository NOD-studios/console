define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'babel-runtime/helpers/interop-require-default', 'stack-trace', 'app-root-path', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeHelpersToConsumableArray, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _babelRuntimeCoreJsObjectDefineProperty, _sourceMapSupportRegister, _cardinal, _babelRuntimeHelpersInteropRequireDefault, _stackTrace, _appRootPath, _circularJson, _path, _os, _decorateThis, _autobindDecorator, _nodEnvironment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _highlighter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_cardinal);

  var _stackTrace2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_stackTrace);

  var _appRootPath2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appRootPath);

  var _json = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_circularJson);

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _os2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_os);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var PRIVATE = (0, _babelRuntimeCoreJsSymbol['default'])('PRIVATE');

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
        json: (0, _decorateThis.Optional)(Object)
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
        standart: standart,
        config: {
          console: {}
        },
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
          this.output('error', error);
          return false;
        }
      }
    }, {
      key: 'stack',
      decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(Number)],
      value: function stack() {
        var level = arguments.length <= 0 || arguments[0] === undefined ? 6 : arguments[0];

        return new Error().stack.split(_os2['default'].EOL)[level].replace("\t", '').trim();
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
  exports.console = console;
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

  var environment = new _nodEnvironment.Environment({
    root: _path2['default'].resolve('' + _appRootPath2['default']),
    error: error, warn: warn, info: info, log: log, debug: debug
  });
  console.options.config = environment.config;
  exports['default'] = Console;
});
//# sourceMappingURL=data:application/json;base64,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TyxTQUFLLE1BQU0sRUFBQyxDQUFDO09BQ25EOzs7V0FsR1EsZUFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQ3hCO1dBZ0JRLGVBQVk7QUFDbkIsZUFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxZQUFvQixDQUFDO09BQ2pDOztXQWpJVSxPQUFPOzs7O0FBa05iLE1BQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7O01BQ3RCLEtBQUssR0FBNkIsT0FBTyxDQUF6QyxLQUFLO01BQUUsSUFBSSxHQUF1QixPQUFPLENBQWxDLElBQUk7TUFBRSxJQUFJLEdBQWlCLE9BQU8sQ0FBNUIsSUFBSTtNQUFFLEdBQUcsR0FBWSxPQUFPLENBQXRCLEdBQUc7TUFBRSxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLOzs7Ozs7O0FBQzFDLE1BQUksV0FBVyxHQUFHLG9CQTNPVCxXQUFXLENBMk9jO0FBQ2hDLFFBQUksRUFBRyxrQkFBSyxPQUFPLCtCQUFrQjtBQUNyQyxTQUFLLEVBQUwsS0FBSyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxHQUFHLEVBQUgsR0FBRyxFQUFFLEtBQUssRUFBTCxLQUFLO0dBQzlCLENBQUMsQ0FBQztBQUNILFNBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7dUJBQzdCLE9BQU8iLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHN0YWNrVHJhY2UgZnJvbSAnc3RhY2stdHJhY2UnO1xuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IFBSSVZBVEUgPSBTeW1ib2woJ1BSSVZBVEUnKTtcblxubGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFuZGFydCxcbiAgICBjb25maWcgICAgOiB7XG4gICAgICBjb25zb2xlIDoge31cbiAgICB9LFxuICAgIGpzb25cbiAgfTtcblxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLm9wdGlvbnM7XG4gIH1cblxuICBzZXQgb3B0aW9ucyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHN0YW5kYXJ0ICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgY29uZmlnICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBoaWdobGlnaHQgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGpzb24gICAgICA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzW1BSSVZBVEVdLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBSSVZBVEUsIHtcbiAgICAgIGVudW1lcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlICAgICAgOiB7XG4gICAgICAgIG9wdGlvbnMgOiB7fSxcbiAgICAgICAgbGV2ZWwgICA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkID09PSAnYm9vZWxhbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMub3V0cHV0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKGxldmVsID0gNikge1xuICAgIHJldHVybiBuZXcgRXJyb3IoKS5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbbGV2ZWxdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xubGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgcm9vdCA6IHBhdGgucmVzb2x2ZShgJHthcHBSb290UGF0aH1gKSxcbiAgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcbn0pO1xuY29uc29sZS5vcHRpb25zLmNvbmZpZyA9IGVudmlyb25tZW50LmNvbmZpZztcbmV4cG9ydCBkZWZhdWx0IENvbnNvbGU7XG4iXX0=