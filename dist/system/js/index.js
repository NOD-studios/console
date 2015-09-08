System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'app-root-path', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment', 'console'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _toConsumableArray, _Symbol, _Object$assign, _Object$defineProperty, highlighter, appRootPath, json, path, os, param, returns, optional, anyOf, autobind, Environment, _console, PRIVATE, config, standart, Console, console, error, warn, info, log, debug;

  return {
    setters: [function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_babelRuntimeHelpersDefineProperty) {
      _defineProperty = _babelRuntimeHelpersDefineProperty['default'];
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _toConsumableArray = _babelRuntimeHelpersToConsumableArray['default'];
    }, function (_babelRuntimeCoreJsSymbol) {
      _Symbol = _babelRuntimeCoreJsSymbol['default'];
    }, function (_babelRuntimeCoreJsObjectAssign) {
      _Object$assign = _babelRuntimeCoreJsObjectAssign['default'];
    }, function (_babelRuntimeCoreJsObjectDefineProperty) {
      _Object$defineProperty = _babelRuntimeCoreJsObjectDefineProperty['default'];
    }, function (_sourceMapSupportRegister) {}, function (_cardinal) {
      highlighter = _cardinal['default'];
    }, function (_appRootPath) {
      appRootPath = _appRootPath['default'];
    }, function (_circularJson) {
      json = _circularJson['default'];
    }, function (_path) {
      path = _path['default'];
    }, function (_os) {
      os = _os['default'];
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
      anyOf = _decorateThis.AnyOf;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator['default'];
    }, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }, function (_console2) {
      _console = _console2['default'];
    }],
    execute: function () {
      'use strict';

      PRIVATE = _Symbol('PRIVATE');
      config = new Environment({
        root: path.resolve('.')
      }).config || {
        console: {}
      };
      standart = {
        output: function output() {},
        error: function error() {}
      };

      if (console) {
        _Object$assign(standart, {
          output: console.log.bind(console),
          error: console.error.bind(console)
        });
      }

      if (process) {
        _Object$assign(standart, {
          output: process.stdout.write.bind(process.stdout),
          error: process.stderr.write.bind(process.stdout)
        });
      }

      Console = (function () {
        _createDecoratedClass(Console, [{
          key: 'setOptions',
          decorators: [returns(Object), param(optional({
            standart: optional(Object),
            enabled: optional(Boolean),
            logTypes: optional(Boolean),
            config: optional(Object),
            highlight: optional(Object),
            json: optional(Object),
            stackDepth: optional(Number)
          }))],
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            options = _Object$assign(this[PRIVATE].options, this.defaults, options);
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

          _classCallCheck(this, Console);

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
            highlight: highlighter.highlight.bind(highlighter),
            stackDepth: 7,
            standart: standart,
            config: config,
            json: json
          };

          _Object$defineProperty(this, PRIVATE, {
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

        _createDecoratedClass(Console, [{
          key: 'typify',
          decorators: [returns(Object)],
          value: function typify() {
            var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            var type = typeof param;
            return _defineProperty({}, type, param);
          }
        }, {
          key: 'stringify',
          decorators: [returns(String)],
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
          decorators: [returns(anyOf(String, Boolean)), param(String)],
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
          decorators: [returns(String), param(Number)],
          value: function stack() {
            var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];

            var stack = new Error().stack;
            return stack.split(os.EOL)[stackDepth].replace("\t", '').trim();
          }
        }, {
          key: 'getLevel',
          decorators: [returns(String)],
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
          decorators: [param(anyOf(String, Number)), returns(anyOf(Number, Boolean))],
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
          decorators: [returns(String), param(optional(String)), param(optional(String)), param(optional(String))],
          value: function format() {
            var stack = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var level = arguments.length <= 1 || arguments[1] === undefined ? this.level : arguments[1];
            var params = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

            level = level.toUpperCase();
            var output = '' + os.EOL + level + ': ' + stack + os.EOL + params + os.EOL;
            return output;
          }
        }, {
          key: 'checkLevel',
          decorators: [returns(Boolean), autobind],
          value: function checkLevel() {
            var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

            if (this.levels[level] <= this.levels[this.level]) {
              return true;
            }
            return false;
          }
        }, {
          key: 'standart',
          decorators: [returns(anyOf(Boolean, String)), autobind],
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

            params = this.stringify.apply(this, _toConsumableArray(params));
            params = this.highlight(params);
            params = this.format(this.stack(), level, params);

            return this.options.standart[method](params);
          }
        }, {
          key: 'debug',
          decorators: [autobind],
          value: function debug() {
            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              params[_key3] = arguments[_key3];
            }

            return this.standart.apply(this, ['debug', 'output'].concat(params));
          }
        }, {
          key: 'log',
          decorators: [autobind],
          value: function log() {
            for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = arguments[_key4];
            }

            return this.standart.apply(this, ['log', 'output'].concat(params));
          }
        }, {
          key: 'info',
          decorators: [autobind],
          value: function info() {
            for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              params[_key5] = arguments[_key5];
            }

            return this.standart.apply(this, ['info', 'output'].concat(params));
          }
        }, {
          key: 'warn',
          decorators: [autobind],
          value: function warn() {
            for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              params[_key6] = arguments[_key6];
            }

            return this.standart.apply(this, ['warn', 'error'].concat(params));
          }
        }, {
          key: 'error',
          decorators: [autobind],
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

      _export('Console', Console);

      console = new Console();
      error = console.error;
      warn = console.warn;
      info = console.info;
      log = console.log;
      debug = console.debug;

      _export('error', error);

      _export('warn', warn);

      _export('info', info);

      _export('log', log);

      _export('debug', debug);

      _export('default', console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDLFFBQVEsTUFBQSxDQUFiLElBQUksR0FBVSxNQUFNLEVBQUUsUUFBUSxTQUFLLE1BQU0sRUFBQyxDQUFDO1dBQ25EOzs7dUJBRUEsUUFBUTtpQkFDTCxnQkFBWTsrQ0FBUixNQUFNO0FBQU4sb0JBQU07OztBQUNaLG1CQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLEdBQVUsTUFBTSxFQUFFLE9BQU8sU0FBSyxNQUFNLEVBQUMsQ0FBQztXQUNsRDs7O3VCQUVBLFFBQVE7aUJBQ0osaUJBQVk7K0NBQVIsTUFBTTtBQUFOLG9CQUFNOzs7QUFDYixtQkFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxHQUFVLE9BQU8sRUFBRSxPQUFPLFNBQUssTUFBTSxFQUFDLENBQUM7V0FDbkQ7OztlQWxHUSxlQUFHO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1dBQ3hCO2VBZ0JRLGVBQVk7QUFDbkIsbUJBQU8sSUFBSSxDQUFDLFFBQVEsTUFBQSxDQUFiLElBQUksWUFBb0IsQ0FBQztXQUNqQzs7O2VBbElVLE9BQU87Ozs7O0FBbU5oQixhQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDZCxXQUFLLEdBQTZCLE9BQU8sQ0FBekMsS0FBSztBQUFFLFVBQUksR0FBdUIsT0FBTyxDQUFsQyxJQUFJO0FBQUUsVUFBSSxHQUFpQixPQUFPLENBQTVCLElBQUk7QUFBRSxTQUFHLEdBQVksT0FBTyxDQUF0QixHQUFHO0FBQUUsV0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzs7Ozs7Ozs7Ozs7O3lCQUMzQixPQUFPIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCBhcHBSb290UGF0aCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IF9jb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5cbmxldCBjb25maWcgPSAobmV3IEVudmlyb25tZW50KHtcbiAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpXG59KSkuY29uZmlnIHx8IHtcbiAgY29uc29sZSA6IHt9XG59O1xuXG5sZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XG4gIGxldmVscyA9IHtcbiAgICBlcnJvciA6IDEsXG4gICAgd2FybiAgOiAyLFxuICAgIGluZm8gIDogMyxcbiAgICBsb2cgICA6IDQsXG4gICAgZGVidWcgOiA1XG4gIH07XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZW5hYmxlZCAgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgICA6IGZhbHNlLFxuICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgaGlnaGxpZ2h0ICA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFja0RlcHRoIDogNyxcbiAgICBzdGFuZGFydCxcbiAgICBjb25maWcsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxufVxuXG5sZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKCk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl19