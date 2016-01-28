'use strict';

System.register(['os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', './configuration', 'decorate-this'], function (_export, _context) {
  var os, circularJson, highlighter, standart, autobind, Configuration, param, returns, optional, anyOf, _typeof, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _class, PROTECTED, Console;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  return {
    setters: [function (_os) {
      os = _os.default;
    }, function (_circularJson) {
      circularJson = _circularJson.default;
    }, function (_cardinal) {
      highlighter = _cardinal.default;
    }, function (_standart) {
      standart = _standart.standart;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
      anyOf = _decorateThis.AnyOf;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      PROTECTED = Symbol('PROTECTED');

      _export('Console', Console = (_dec = returns(Object), _dec2 = returns(String), _dec3 = param(String), _dec4 = returns(anyOf(String, Boolean)), _dec5 = param(Number), _dec6 = returns(String), _dec7 = returns(String), _dec8 = returns(anyOf(Number, Boolean)), _dec9 = param(anyOf(String, Number)), _dec10 = param(optional(String)), _dec11 = param(optional(String)), _dec12 = param(optional(String)), _dec13 = returns(String), _dec14 = returns(Boolean), _dec15 = returns(anyOf(Boolean, String)), (_class = function () {
        _createClass(Console, [{
          key: 'typify',
          value: function typify() {
            var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
            var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
            return _defineProperty({}, type, param);
          }
        }, {
          key: 'stringify',
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

            return this.json.stringify(params, null, 2);
          }
        }, {
          key: 'safeHighlight',
          value: function safeHighlight() {
            var params = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            try {
              return this.highlight(params);
            } catch (error) {
              this.standart('error', 'error', error);
              return false;
            }
          }
        }, {
          key: 'stack',
          value: function stack() {
            var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];
            return new Error().stack.split(os.EOL)[stackDepth].replace("\t", '').trim();
          }
        }, {
          key: 'getLevel',
          value: function getLevel() {
            var value = this[PROTECTED].level,
                property = undefined;

            for (property in this.options.levels) {
              if (this.options.levels.hasOwnProperty(property)) {
                if (this.options.levels[property] === value) {
                  return property;
                }
              }
            }

            return property;
          }
        }, {
          key: 'setLevel',
          value: function setLevel() {
            var level = arguments.length <= 0 || arguments[0] === undefined ? this.optiopns.level : arguments[0];

            if (typeof level === 'string') {
              if (this.options.levels[level]) {
                return this[PROTECTED].level = this.options.levels[level];
              }
            }

            if (typeof level === 'number') {
              level = this.getLevel();

              if (level !== false) {
                this[PROTECTED].level = level;
              }
            }

            return false;
          }
        }, {
          key: 'format',
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
          value: function checkLevel() {
            var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

            if (this.options.levels[level] <= this.options.levels[this.level]) {
              return true;
            }

            return false;
          }
        }, {
          key: 'standart',
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
            params = this.safeHighlight(params);
            params = this.format(this.stack(), level, params);
            return this.standartIO[method](params);
          }
        }, {
          key: 'debug',
          value: function debug() {
            for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              params[_key3] = arguments[_key3];
            }

            return this.standart.apply(this, ['debug', 'output'].concat(params));
          }
        }, {
          key: 'log',
          value: function log() {
            for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              params[_key4] = arguments[_key4];
            }

            return this.standart.apply(this, ['log', 'output'].concat(params));
          }
        }, {
          key: 'info',
          value: function info() {
            for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              params[_key5] = arguments[_key5];
            }

            return this.standart.apply(this, ['info', 'output'].concat(params));
          }
        }, {
          key: 'warn',
          value: function warn() {
            for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              params[_key6] = arguments[_key6];
            }

            return this.standart.apply(this, ['warn', 'error'].concat(params));
          }
        }, {
          key: 'error',
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

        function Console() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? new Configuration() : arguments[0];
          var standartIO = arguments.length <= 1 || arguments[1] === undefined ? standart : arguments[1];
          var json = arguments.length <= 2 || arguments[2] === undefined ? circularJson : arguments[2];
          var highlight = arguments.length <= 3 || arguments[3] === undefined ? highlighter.highlight.bind(highlighter) : arguments[3];

          _classCallCheck(this, Console);

          Object.defineProperty(this, PROTECTED, {
            enumerable: false,
            value: {
              level: options.level
            }
          });
          Object.assign(this, {
            options: options,
            standartIO: standartIO,
            json: json,
            highlight: highlight
          });

          if (typeof this.options.silent === 'boolean') {
            this.options.enabled = this.options.silent ? false : true;
          }
        }

        return Console;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'typify', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'safeHighlight', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'safeHighlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec10, _dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [autobind, _dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [autobind, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class)));

      _export('Console', Console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFhUyxLQUFLLHlEQUFHLFNBQVM7Ozs7Ozs7Ozs4Q0FRWCxNQUFNO0FBQU4sb0JBQU07Ozs7Ozs7Ozs7Ozs7O2dCQVdMLE1BQU0seURBQUcsRUFBRTs7Ozs7Ozs7Ozs7O2dCQVduQixVQUFVLHlEQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFnQ2pDLEtBQUsseURBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBbUI3QixLQUFLLHlEQUFHLEVBQUU7Z0JBQUUsS0FBSyx5REFBRyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLHlEQUFHLEVBQUU7Ozs7Ozs7O2dCQVF2QyxLQUFLLHlEQUFHLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7OzsrQ0FTc0IsTUFBTTtBQUFOLG9CQUFNOzs7Z0JBQWhELEtBQUsseURBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTSx5REFBRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBZ0JyQyxNQUFNO0FBQU4sb0JBQU07Ozs7Ozs7OytDQUtSLE1BQU07QUFBTixvQkFBTTs7Ozs7Ozs7K0NBS0wsTUFBTTtBQUFOLG9CQUFNOzs7Ozs7OzsrQ0FLTixNQUFNO0FBQU4sb0JBQU07Ozs7Ozs7OytDQUtMLE1BQU07QUFBTixvQkFBTTs7Ozs7Ozs7Ozs7Ozs7OztjQUtiLE9BQU8seURBQUcsSUFBSSxhQUFhLEVBQUU7Y0FDN0IsVUFBVSx5REFBRyxRQUFRO2NBQ3JCLElBQUkseURBQUcsWUFBWTtjQUNuQixTQUFTLHlEQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBjaXJjdWxhckpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgc2FmZUhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKClcbiAgICAgIC5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbc3RhY2tEZXB0aF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUk9URUNURURdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5vcHRpb3Bucy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMub3B0aW9ucy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5zYWZlSGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0SU9bbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgc3RhbmRhcnRJTyA9IHN0YW5kYXJ0LFxuICAgIGpzb24gPSBjaXJjdWxhckpzb24sXG4gICAgaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpXG4gICkge1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIGxldmVsIDogb3B0aW9ucy5sZXZlbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIHN0YW5kYXJ0SU8sIGpzb24sIGhpZ2hsaWdodCB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
