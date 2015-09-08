System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', '@nod/environment', 'cardinal', 'stack-trace', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _toConsumableArray, _Symbol, _Object$assign, _Object$defineProperty, Environment, highlighter, stackTrace, json, path, os, param, returns, optional, anyOf, autobind, PRIVATE, standart, Console, environment, console, error, warn, info, log, debug;

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
    }, function (_sourceMapSupportRegister) {}, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }, function (_cardinal) {
      highlighter = _cardinal['default'];
    }, function (_stackTrace) {
      stackTrace = _stackTrace['default'];
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
    }],
    execute: function () {
      'use strict';

      PRIVATE = _Symbol('PRIVATE');
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
            json: optional(Object)
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
            level: 'debug',
            highlight: highlighter.highlight.bind(highlighter),
            config: {
              console: {}
            },
            standart: standart,
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
              this.output('error', error);
              return false;
            }
          }
        }, {
          key: 'stack',
          decorators: [returns(String), param(Number)],
          value: function stack() {
            var level = arguments.length <= 0 || arguments[0] === undefined ? 6 : arguments[0];

            return new Error().stack.split(os.EOL)[level].replace("\t", '').trim();
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

      _export('default', Console);

      environment = new Environment({
        root: path.resolve('.'),
        warn: function warn() {},
        info: function info() {},
        debug: function debug() {}
      });
      console = new Console({
        config: environment.config
      });
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

      environment.setOptions({ error: error, warn: warn, info: info, log: log, debug: debug });

      _export('default', console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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cnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgc3RhY2tUcmFjZSBmcm9tICdzdGFjay10cmFjZSc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5sZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICA6IGZhbHNlLFxuICAgIGxldmVsICAgICA6ICdkZWJ1ZycsXG4gICAgaGlnaGxpZ2h0IDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgIGNvbmZpZyAgICA6IHtcbiAgICAgIGNvbnNvbGUgOiB7fVxuICAgIH0sXG4gICAgc3RhbmRhcnQsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGhpZ2hsaWdodCA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2sobGV2ZWwgPSA2KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtsZXZlbF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG59XG5cbmxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKSxcbiAgd2FybiAgOiAoKSA9PiB7fSxcbiAgaW5mbyAgOiAoKSA9PiB7fSxcbiAgZGVidWcgOiAoKSA9PiB7fVxufSk7XG5sZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKHtcbiAgY29uZmlnIDogZW52aXJvbm1lbnQuY29uZmlnXG59KTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmVudmlyb25tZW50LnNldE9wdGlvbnMoeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=