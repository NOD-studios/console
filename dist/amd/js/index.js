define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'babel-runtime/helpers/interop-require-default', 'stack-trace', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeHelpersToConsumableArray, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _babelRuntimeCoreJsObjectDefineProperty, _sourceMapSupportRegister, _cardinal, _babelRuntimeHelpersInteropRequireDefault, _stackTrace, _circularJson, _path, _os, _decorateThis, _autobindDecorator, _nodEnvironment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _highlighter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_cardinal);

  var _stackTrace2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_stackTrace);

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
        level: 'debug',
        highlight: _highlighter['default'].highlight.bind(_highlighter['default']),
        config: {
          console: {}
        },
        standart: standart,
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

  exports['default'] = Console;

  var environment = new _nodEnvironment.Environment({
    root: _path2['default'].resolve('.'),
    warn: function warn() {},
    info: function info() {},
    debug: function debug() {}
  });
  var console = new Console({
    config: environment.config
  });
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

  environment.setOptions({ error: error, warn: warn, info: info, log: log, debug: debug });
  exports['default'] = console;
});
//# sourceMappingURL=data:application/json;base64,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LFNBQUssTUFBTSxFQUFDLENBQUM7T0FDbkQ7OztXQWxHUSxlQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDeEI7V0FnQlEsZUFBWTtBQUNuQixlQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLFlBQW9CLENBQUM7T0FDakM7O1dBaklrQixPQUFPOzs7dUJBQVAsT0FBTzs7QUFrTjVCLE1BQUksV0FBVyxHQUFHLG9CQXhPVCxXQUFXLENBd09jO0FBQ2hDLFFBQUksRUFBRyxrQkFBSyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLFFBQUksRUFBSSxnQkFBTSxFQUFFO0FBQ2hCLFFBQUksRUFBSSxnQkFBTSxFQUFFO0FBQ2hCLFNBQUssRUFBRyxpQkFBTSxFQUFFO0dBQ2pCLENBQUMsQ0FBQztBQUNILE1BQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO0FBQ3hCLFVBQU0sRUFBRyxXQUFXLENBQUMsTUFBTTtHQUM1QixDQUFDLENBQUM7TUFDVSxLQUFLLEdBQTZCLE9BQU8sQ0FBekMsS0FBSztNQUFFLElBQUksR0FBdUIsT0FBTyxDQUFsQyxJQUFJO01BQUUsSUFBSSxHQUFpQixPQUFPLENBQTVCLElBQUk7TUFBRSxHQUFHLEdBQVksT0FBTyxDQUF0QixHQUFHO01BQUUsS0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzs7Ozs7OztBQUMxQyxhQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsR0FBRyxFQUFILEdBQUcsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLENBQUMsQ0FBQzt1QkFDM0MsT0FBTyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgc3RhY2tUcmFjZSBmcm9tICdzdGFjay10cmFjZSc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcblxuY29uc3QgUFJJVkFURSA9IFN5bWJvbCgnUFJJVkFURScpO1xubGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZSB7XG4gIGxldmVscyA9IHtcbiAgICBlcnJvciA6IDEsXG4gICAgd2FybiAgOiAyLFxuICAgIGluZm8gIDogMyxcbiAgICBsb2cgICA6IDQsXG4gICAgZGVidWcgOiA1XG4gIH07XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZW5hYmxlZCAgIDogdHJ1ZSxcbiAgICBsb2dUeXBlcyAgOiBmYWxzZSxcbiAgICBsZXZlbCAgICAgOiAnZGVidWcnLFxuICAgIGhpZ2hsaWdodCA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBjb25maWcgICAgOiB7XG4gICAgICBjb25zb2xlIDoge31cbiAgICB9LFxuICAgIHN0YW5kYXJ0LFxuICAgIGpzb25cbiAgfTtcblxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLm9wdGlvbnM7XG4gIH1cblxuICBzZXQgb3B0aW9ucyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcHRpb25zKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHN0YW5kYXJ0ICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgY29uZmlnICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBoaWdobGlnaHQgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGpzb24gICAgICA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzW1BSSVZBVEVdLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBSSVZBVEUsIHtcbiAgICAgIGVudW1lcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlICAgICAgOiB7XG4gICAgICAgIG9wdGlvbnMgOiB7fSxcbiAgICAgICAgbGV2ZWwgICA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkID09PSAnYm9vZWxhbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMub3V0cHV0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKGxldmVsID0gNikge1xuICAgIHJldHVybiBuZXcgRXJyb3IoKS5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbbGV2ZWxdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxufVxuXG5sZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICByb290IDogcGF0aC5yZXNvbHZlKCcuJyksXG4gIHdhcm4gIDogKCkgPT4ge30sXG4gIGluZm8gIDogKCkgPT4ge30sXG4gIGRlYnVnIDogKCkgPT4ge31cbn0pO1xubGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSh7XG4gIGNvbmZpZyA6IGVudmlyb25tZW50LmNvbmZpZ1xufSk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5lbnZpcm9ubWVudC5zZXRPcHRpb25zKHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl19