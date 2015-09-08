System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'stack-trace', 'app-root-path', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _toConsumableArray, _Symbol, _Object$assign, _Object$defineProperty, highlighter, stackTrace, appRootPath, json, path, os, param, returns, optional, anyOf, autobind, Environment, PRIVATE, config, standart, Console, console, error, warn, info, log, debug;

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
    }, function (_stackTrace) {
      stackTrace = _stackTrace['default'];
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
            level: 'warn',
            highlight: highlighter.highlight.bind(highlighter),
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
//# sourceMappingURL=data:application/json;base64,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Ozs7QUFDWixtQkFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxHQUFVLE1BQU0sRUFBRSxPQUFPLFNBQUssTUFBTSxFQUFDLENBQUM7V0FDbEQ7Ozt1QkFFQSxRQUFRO2lCQUNKLGlCQUFZOytDQUFSLE1BQU07QUFBTixvQkFBTTs7O0FBQ2IsbUJBQU8sSUFBSSxDQUFDLFFBQVEsTUFBQSxDQUFiLElBQUksR0FBVSxPQUFPLEVBQUUsT0FBTyxTQUFLLE1BQU0sRUFBQyxDQUFDO1dBQ25EOzs7ZUFsR1EsZUFBRztBQUNWLG1CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztXQUN4QjtlQWdCUSxlQUFZO0FBQ25CLG1CQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLFlBQW9CLENBQUM7V0FDakM7OztlQS9IVSxPQUFPOzs7OztBQWdOaEIsYUFBTyxHQUFHLElBQUksT0FBTyxFQUFFO0FBQ2QsV0FBSyxHQUE2QixPQUFPLENBQXpDLEtBQUs7QUFBRSxVQUFJLEdBQXVCLE9BQU8sQ0FBbEMsSUFBSTtBQUFFLFVBQUksR0FBaUIsT0FBTyxDQUE1QixJQUFJO0FBQUUsU0FBRyxHQUFZLE9BQU8sQ0FBdEIsR0FBRztBQUFFLFdBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Ozs7Ozs7Ozs7Ozt5QkFDM0IsT0FBTyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgc3RhY2tUcmFjZSBmcm9tICdzdGFjay10cmFjZSc7XG5pbXBvcnQgYXBwUm9vdFBhdGggZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcblxuY29uc3QgUFJJVkFURSA9IFN5bWJvbCgnUFJJVkFURScpO1xuXG5sZXQgY29uZmlnID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxufSkpLmNvbmZpZyB8fCB7XG4gIGNvbnNvbGUgOiB7fVxufTtcblxubGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFuZGFydCxcbiAgICBjb25maWcsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGhpZ2hsaWdodCA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2sobGV2ZWwgPSA2KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtsZXZlbF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG59XG5cbmxldCBjb25zb2xlID0gbmV3IENvbnNvbGUoKTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=