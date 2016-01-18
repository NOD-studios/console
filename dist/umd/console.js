(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.console = mod.exports;
  }
})(this, function () {
  define(['exports', 'os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', '@nod/base', 'decorate-this', 'source-map-support/register'], function (exports, _os, _circularJson, _cardinal, _standart, _autobindDecorator, _base, _decorateThis) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Console = undefined;

    var _os2 = _interopRequireDefault(_os);

    var _circularJson2 = _interopRequireDefault(_circularJson);

    var _cardinal2 = _interopRequireDefault(_cardinal);

    var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

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

    var _typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    var _createClass = function () {
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

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
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

    var _get = function get(object, property, receiver) {
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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _desc, _value, _class;

    var Console = exports.Console = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
      standart: (0, _decorateThis.Optional)(Object),
      enabled: (0, _decorateThis.Optional)(Boolean),
      logTypes: (0, _decorateThis.Optional)(Boolean),
      highlight: (0, _decorateThis.Optional)(Object),
      json: (0, _decorateThis.Optional)(Object),
      stackDepth: (0, _decorateThis.Optional)(Number)
    })), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.returns)(Object), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.param)(String), _dec6 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), _dec7 = (0, _decorateThis.param)(Number), _dec8 = (0, _decorateThis.returns)(String), _dec9 = (0, _decorateThis.returns)(String), _dec10 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean)), _dec11 = (0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), _dec12 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec13 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec14 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec15 = (0, _decorateThis.returns)(String), _dec16 = (0, _decorateThis.returns)(Boolean), _dec17 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), (_class = function (_Base) {
      _inherits(Console, _Base);

      _createClass(Console, [{
        key: 'setOptions',
        value: function setOptions() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          _get(Object.getPrototypeOf(Console.prototype), 'setOptions', this).call(this, options);
          this.level = options.level;
          return options;
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

          return new Error().stack.split(_os2.default.EOL)[stackDepth].replace("\t", '').trim();
        }
      }, {
        key: 'getLevel',
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
        value: function format() {
          var stack = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
          var level = arguments.length <= 1 || arguments[1] === undefined ? this.level : arguments[1];
          var params = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

          level = level.toUpperCase();
          var output = '' + _os2.default.EOL + level + ': ' + stack + _os2.default.EOL + params + _os2.default.EOL;
          return output;
        }
      }, {
        key: 'checkLevel',
        value: function checkLevel() {
          var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

          if (this.levels[level] <= this.levels[this.level]) {
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
        var _ret;

        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Console).call(this, options = {}));

        _this.levels = {
          error: 1,
          warn: 2,
          info: 3,
          log: 4,
          debug: 5
        };
        _this.defaults = {
          enabled: true,
          logTypes: false,
          level: 'warn',
          highlight: _cardinal2.default.highlight.bind(_cardinal2.default),
          stackDepth: 7,
          standart: _standart.standart,
          json: _circularJson2.default
        };

        if (_this.options.env.console) {
          if (typeof _this.options.env.console.level !== 'undefined') {
            _this.level = _this.options.env.console.level;
          }
          if (typeof _this.options.env.console.enabled === 'boolean') {
            _this.options.enabled = _this.options.env.console.enabled;
          }
        }

        if (typeof _this.options.silent === 'boolean') {
          _this.options.enabled = _this.options.silent ? false : true;
        }

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
      }

      return Console;
    }(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'typify', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'highlight', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'highlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [_autobindDecorator2.default, _dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [_autobindDecorator2.default, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));
  });
});
//# sourceMappingURL=data:application/json;base64,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TyxHQUFHLE1BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1dBQ3pEO1NBQ0Y7O0FBRUQsWUFBSSxPQUFPLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDNUMsZ0JBQUssT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztTQUMzRDs7QUFFRCxxRUFBWTtPQUNiOzthQTlMVSxPQUFPO1lBSlgsSUFBSSIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCB7IHN0YW5kYXJ0IH0gZnJvbSAnLi9zdGFuZGFydCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgQ29uc29sZSBleHRlbmRzIEJhc2Uge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICBsZXZlbCAgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCAgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgc3RhbmRhcnQsXG4gICAganNvblxuICB9O1xuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKClcbiAgICAgIC5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbc3RhY2tEZXB0aF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyA9IHt9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmxldmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmxldmVsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUuZW5hYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmVuYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
