System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'os', 'circular-json', 'cardinal', './config', './standart', 'autobind-decorator', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _toConsumableArray, _Symbol, _Object$assign, _Object$defineProperty, os, json, highlighter, config, standart, autobind, param, returns, optional, anyOf, PRIVATE, Console;

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
    }, function (_sourceMapSupportRegister) {}, function (_os) {
      os = _os['default'];
    }, function (_circularJson) {
      json = _circularJson['default'];
    }, function (_cardinal) {
      highlighter = _cardinal['default'];
    }, function (_config) {
      config = _config.config;
    }, function (_standart) {
      standart = _standart.standart;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator['default'];
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
      anyOf = _decorateThis.AnyOf;
    }],
    execute: function () {
      'use strict';

      PRIVATE = _Symbol('PRIVATE');

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
          key: 'options',
          get: function get() {
            return this[PRIVATE].options;
          },
          set: function set() {
            return this.setOptions.apply(this, arguments);
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

        return Console;
      })();

      _export('Console', Console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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STthQUNmO1dBQ0YsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLGNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQy9CLGdCQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDNUQsa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNoRDtBQUNELGdCQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDNUQsa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDNUQ7V0FDRjs7QUFFRCxjQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUNuRCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7V0FDbEU7O0FBRUQsY0FBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksb0JBQWlCLENBQUM7U0FDckQ7O2VBL01VLE9BQU8iLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBzdGFuZGFydCB9IGZyb20gJy4vc3RhbmRhcnQnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBSSVZBVEUgPSBTeW1ib2woJ1BSSVZBVEUnKTtcblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICBsZXZlbCAgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCAgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgc3RhbmRhcnQsXG4gICAgY29uZmlnLFxuICAgIGpzb25cbiAgfTtcblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5vcHRpb25zO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGNvbmZpZyAgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGhpZ2hsaWdodCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGpzb24gICAgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIHN0YWNrRGVwdGggOiBvcHRpb25hbChOdW1iZXIpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpc1tQUklWQVRFXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKHN0YWNrRGVwdGggPSB0aGlzLm9wdGlvbnMuc3RhY2tEZXB0aCkge1xuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBzdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbc3RhY2tEZXB0aF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBSSVZBVEUsIHtcbiAgICAgIGVudW1lcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlICAgICAgOiB7XG4gICAgICAgIG9wdGlvbnMgOiB7fSxcbiAgICAgICAgbGV2ZWwgICA6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUubGV2ZWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkID09PSAnYm9vZWxhbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG59XG4iXX0=