'use strict';

System.register(['source-map-support/register', 'os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', '@nod/base', 'decorate-this'], function (_export, _context) {
  var os, json, highlighter, standart, autobind, Base, param, returns, optional, anyOf, _typeof, _createClass, _get, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _desc, _value, _class, PROTECTED, Console;

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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
    setters: [function (_sourceMapSupportRegister) {}, function (_os) {
      os = _os.default;
    }, function (_circularJson) {
      json = _circularJson.default;
    }, function (_cardinal) {
      highlighter = _cardinal.default;
    }, function (_standart) {
      standart = _standart.standart;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodBase) {
      Base = _nodBase.Base;
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

      _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);

          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;

          if (getter === undefined) {
            return undefined;
          }

          return getter.call(receiver);
        }
      };

      PROTECTED = Symbol('PROTECTED');

      _export('Console', Console = (_dec = param(optional({
        standart: optional(Object),
        enabled: optional(Boolean),
        logTypes: optional(Boolean),
        highlight: optional(Object),
        json: optional(Object),
        stackDepth: optional(Number),
        levels: optional(Object)
      })), _dec2 = returns(Object), _dec3 = returns(Object), _dec4 = returns(String), _dec5 = param(String), _dec6 = returns(anyOf(String, Boolean)), _dec7 = param(Number), _dec8 = returns(String), _dec9 = returns(String), _dec10 = returns(anyOf(Number, Boolean)), _dec11 = param(anyOf(String, Number)), _dec12 = param(optional(String)), _dec13 = param(optional(String)), _dec14 = param(optional(String)), _dec15 = returns(String), _dec16 = returns(Boolean), _dec17 = returns(anyOf(Boolean, String)), (_class = function (_Base) {
        _inherits(Console, _Base);

        _createClass(Console, [{
          key: 'setOptions',
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            return _get(Object.getPrototypeOf(Console.prototype), 'setOptions', this).call(this, options);
          }
        }, {
          key: 'typify',
          value: function typify() {
            var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
            var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
            return _defineProperty({}, type, param);
          }
        }, {
          key: 'stringify',
          value: function stringify() {
            var _this2 = this;

            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
              params[_key] = arguments[_key];
            }

            if (this.logTypes === true) {
              params = params.map(function (param) {
                return _this2.typify(param);
              });
            }

            return this.options.json.stringify(params, null, 2);
          }
        }, {
          key: 'highlight',
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
            var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

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
            params = this.highlight(params);
            params = this.format(this.stack(), level, params);
            return this.options.standart[method](params);
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
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          _classCallCheck(this, Console);

          var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Console).call(this, options, {
            enabled: true,
            logTypes: false,
            level: 'warn',
            highlight: highlighter.highlight.bind(highlighter),
            stackDepth: 7,
            levels: {
              error: 1,
              warn: 2,
              info: 3,
              log: 4,
              debug: 5
            },
            standart: standart,
            json: json
          }));

          Object.defineProperty(_this, PROTECTED, {
            enumerable: false,
            value: {
              level: 0
            }
          });
          _this.level = _this.options.level;

          if (typeof _this.options.silent === 'boolean') {
            _this.options.enabled = _this.options.silent ? false : true;
          }

          return _this;
        }

        return Console;
      }(Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'typify', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'highlight', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'highlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [autobind, _dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [autobind, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class)));

      _export('Console', Console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXVCYSxPQUFPLHlEQUFHLEVBQUU7Ozs7OztnQkFLaEIsS0FBSyx5REFBRyxTQUFTOzs7Ozs7Ozs7OENBUVgsTUFBTTtBQUFOLG9CQUFNOzs7Ozs7Ozs7Ozs7OztnQkFXVCxNQUFNLHlEQUFHLEVBQUU7Ozs7Ozs7Ozs7OztnQkFXZixVQUFVLHlEQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFnQ2pDLEtBQUsseURBQUcsSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFtQnBCLEtBQUsseURBQUcsRUFBRTtnQkFBRSxLQUFLLHlEQUFHLElBQUksQ0FBQyxLQUFLO2dCQUFFLE1BQU0seURBQUcsRUFBRTs7Ozs7Ozs7Z0JBUXZDLEtBQUsseURBQUcsSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7OytDQVNzQixNQUFNO0FBQU4sb0JBQU07OztnQkFBaEQsS0FBSyx5REFBRyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLHlEQUFHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FnQnJDLE1BQU07QUFBTixvQkFBTTs7Ozs7Ozs7K0NBS1IsTUFBTTtBQUFOLG9CQUFNOzs7Ozs7OzsrQ0FLTCxNQUFNO0FBQU4sb0JBQU07Ozs7Ozs7OytDQUtOLE1BQU07QUFBTixvQkFBTTs7Ozs7Ozs7K0NBS0wsTUFBTTtBQUFOLG9CQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2NBSUgsT0FBTyx5REFBRyxFQUFFIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIGV4dGVuZHMgQmFzZSB7XG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKSxcbiAgICBsZXZlbHMgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2soc3RhY2tEZXB0aCA9IHRoaXMub3B0aW9ucy5zdGFja0RlcHRoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpXG4gICAgICAuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJPVEVDVEVEXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLm9wdGlvbnMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSB0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLm9wdGlvbnMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cbiAgICBzdXBlcihvcHRpb25zLCB7XG4gICAgICBlbmFibGVkICAgIDogdHJ1ZSxcbiAgICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgICBoaWdobGlnaHQgIDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgICBsZXZlbHMgICAgIDoge1xuICAgICAgICBlcnJvciA6IDEsXG4gICAgICAgIHdhcm4gIDogMixcbiAgICAgICAgaW5mbyAgOiAzLFxuICAgICAgICBsb2cgICA6IDQsXG4gICAgICAgIGRlYnVnIDogNVxuICAgICAgfSxcbiAgICAgIHN0YW5kYXJ0LFxuICAgICAganNvblxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIGxldmVsIDogMFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5sZXZlbDtcblxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
