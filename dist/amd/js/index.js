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

  environment.setOptions({ error: error, warn: warn, info: info, log: log, debug: debug });
  exports['default'] = console;
});
//# sourceMappingURL=data:application/json;base64,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LFNBQUssTUFBTSxFQUFDLENBQUM7T0FDbkQ7OztXQWxHUSxlQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDeEI7V0FnQlEsZUFBWTtBQUNuQixlQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLFlBQW9CLENBQUM7T0FDakM7O1dBaklrQixPQUFPOzs7dUJBQVAsT0FBTzs7QUFrTjVCLE1BQUksV0FBVyxHQUFHLG9CQXhPVCxXQUFXLENBd09jO0FBQ2hDLFFBQUksRUFBRyxrQkFBSyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLFFBQUksRUFBSSxnQkFBTSxFQUFFO0FBQ2hCLFFBQUksRUFBSSxnQkFBTSxFQUFFO0FBQ2hCLFNBQUssRUFBRyxpQkFBTSxFQUFFO0dBQ2pCLENBQUMsQ0FBQztBQUNJLE1BQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO0FBQy9CLFVBQU0sRUFBRyxXQUFXLENBQUMsTUFBTTtHQUM1QixDQUFDLENBQUM7O01BQ1UsS0FBSyxHQUE2QixPQUFPLENBQXpDLEtBQUs7TUFBRSxJQUFJLEdBQXVCLE9BQU8sQ0FBbEMsSUFBSTtNQUFFLElBQUksR0FBaUIsT0FBTyxDQUE1QixJQUFJO01BQUUsR0FBRyxHQUFZLE9BQU8sQ0FBdEIsR0FBRztNQUFFLEtBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Ozs7Ozs7QUFDMUMsYUFBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLEdBQUcsRUFBSCxHQUFHLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDLENBQUM7dUJBQzNDLE9BQU8iLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHN0YWNrVHJhY2UgZnJvbSAnc3RhY2stdHJhY2UnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IFBSSVZBVEUgPSBTeW1ib2woJ1BSSVZBVEUnKTtcbmxldCBzdGFuZGFydCA9IHtcbiAgb3V0cHV0IDogKCkgPT4ge30sXG4gIGVycm9yICA6ICgpID0+IHt9XG59O1xuXG5pZiAoY29uc29sZSkge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICBlcnJvciA6IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IHByb2Nlc3Muc3Rkb3V0LndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpLFxuICAgIGVycm9yIDogcHJvY2Vzcy5zdGRlcnIud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dClcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgIDogJ2RlYnVnJyxcbiAgICBoaWdobGlnaHQgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgY29uZmlnICAgIDoge1xuICAgICAgY29uc29sZSA6IHt9XG4gICAgfSxcbiAgICBzdGFuZGFydCxcbiAgICBqc29uXG4gIH07XG5cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5vcHRpb25zO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGNvbmZpZyAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgaGlnaGxpZ2h0IDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpc1tQUklWQVRFXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFLCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge30sXG4gICAgICAgIGxldmVsICAgOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZCA9PT0gJ2Jvb2VsYW4nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm91dHB1dCgnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhsZXZlbCA9IDYpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCkuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW2xldmVsXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BSSVZBVEVdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLmxldmVsID0gdGhpcy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cbn1cblxubGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpLFxuICB3YXJuICA6ICgpID0+IHt9LFxuICBpbmZvICA6ICgpID0+IHt9LFxuICBkZWJ1ZyA6ICgpID0+IHt9XG59KTtcbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKHtcbiAgY29uZmlnIDogZW52aXJvbm1lbnQuY29uZmlnXG59KTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmVudmlyb25tZW50LnNldE9wdGlvbnMoeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=