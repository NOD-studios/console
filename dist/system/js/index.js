System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'stack-trace', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _toConsumableArray, _Symbol, _Object$assign, _Object$defineProperty, highlighter, stackTrace, json, path, os, param, returns, optional, anyOf, autobind, Environment, PRIVATE, standart, Console, environment, console, error, warn, info, log, debug;

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

      _export('console', console);

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
//# sourceMappingURL=data:application/json;base64,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cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCBzdGFja1RyYWNlIGZyb20gJ3N0YWNrLXRyYWNlJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5sZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICA6IGZhbHNlLFxuICAgIGxldmVsICAgICA6ICd3YXJuJyxcbiAgICBoaWdobGlnaHQgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgY29uZmlnICAgIDoge1xuICAgICAgY29uc29sZSA6IHt9XG4gICAgfSxcbiAgICBzdGFuZGFydCxcbiAgICBqc29uXG4gIH07XG5cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5vcHRpb25zO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGNvbmZpZyAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgaGlnaGxpZ2h0IDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpc1tQUklWQVRFXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFLCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge30sXG4gICAgICAgIGxldmVsICAgOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZCA9PT0gJ2Jvb2VsYW4nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm91dHB1dCgnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhsZXZlbCA9IDYpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCkuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW2xldmVsXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BSSVZBVEVdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLmxldmVsID0gdGhpcy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cbn1cblxubGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpLFxuICB3YXJuICA6ICgpID0+IHt9LFxuICBpbmZvICA6ICgpID0+IHt9LFxuICBkZWJ1ZyA6ICgpID0+IHt9XG59KTtcbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKHtcbiAgY29uZmlnIDogZW52aXJvbm1lbnQuY29uZmlnXG59KTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmVudmlyb25tZW50LnNldE9wdGlvbnMoeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=