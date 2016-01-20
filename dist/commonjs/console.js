'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Console = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _circularJson = require('circular-json');

var _circularJson2 = _interopRequireDefault(_circularJson);

var _cardinal = require('cardinal');

var _cardinal2 = _interopRequireDefault(_cardinal);

var _standart = require('./standart');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _base = require('@nod/base');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var PROTECTED = Symbol('PROTECTED');

var Console = exports.Console = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
  standart: (0, _decorateThis.Optional)(Object),
  enabled: (0, _decorateThis.Optional)(Boolean),
  logTypes: (0, _decorateThis.Optional)(Boolean),
  highlight: (0, _decorateThis.Optional)(Object),
  json: (0, _decorateThis.Optional)(Object),
  stackDepth: (0, _decorateThis.Optional)(Number),
  levels: (0, _decorateThis.Optional)(Object)
})), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.returns)(Object), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.param)(String), _dec6 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), _dec7 = (0, _decorateThis.param)(Number), _dec8 = (0, _decorateThis.returns)(String), _dec9 = (0, _decorateThis.returns)(String), _dec10 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean)), _dec11 = (0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), _dec12 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec13 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec14 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec15 = (0, _decorateThis.returns)(String), _dec16 = (0, _decorateThis.returns)(Boolean), _dec17 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), (_class = function (_Base) {
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

      return new Error().stack.split(_os2.default.EOL)[stackDepth].replace("\t", '').trim();
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
      var output = '' + _os2.default.EOL + level + ': ' + stack + _os2.default.EOL + params + _os2.default.EOL;
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
      highlight: _cardinal2.default.highlight.bind(_cardinal2.default),
      stackDepth: 7,
      levels: {
        error: 1,
        warn: 2,
        info: 3,
        log: 4,
        debug: 5
      },
      standart: _standart.standart,
      json: _circularJson2.default
    }));

    Object.defineProperty(_this, PROTECTED, {
      enumerable: false,
      value: {
        level: _this.options.level
      }
    });

    if (typeof _this.options.silent === 'boolean') {
      _this.options.enabled = _this.options.silent ? false : true;
    }
    return _this;
  }

  return Console;
}(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'typify', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'highlight', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'highlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [_autobindDecorator2.default, _dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [_autobindDecorator2.default, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));
//# sourceMappingURL=data:application/json;base64,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U0FBSyxNQUFNLEVBQUMsQ0FBQztLQUNuRDs7O3dCQWxHVztBQUNWLGFBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3hCO3dCQWdCb0I7QUFDbkIsYUFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxZQUFvQixDQUFDO0tBQ2pDOzs7QUFnRkQsV0ExSlcsT0FBTyxHQTBKUTtRQUFkLE9BQU8seURBQUcsRUFBRTs7MEJBMUpiLE9BQU87O3VFQUFQLE9BQU8sYUE0SlYsT0FBTyxFQUFFO0FBQ2IsYUFBTyxFQUFNLElBQUk7QUFDakIsY0FBUSxFQUFLLEtBQUs7QUFDbEIsV0FBSyxFQUFRLE1BQU07QUFDbkIsZUFBUyxFQUFJLG1CQUFZLFNBQVMsQ0FBQyxJQUFJLG9CQUFhO0FBQ3BELGdCQUFVLEVBQUcsQ0FBQztBQUNkLFlBQU0sRUFBTztBQUNYLGFBQUssRUFBRyxDQUFDO0FBQ1QsWUFBSSxFQUFJLENBQUM7QUFDVCxZQUFJLEVBQUksQ0FBQztBQUNULFdBQUcsRUFBSyxDQUFDO0FBQ1QsYUFBSyxFQUFHLENBQUM7T0FDVjtBQUNELGNBQVEsWUFqTEwsUUFBUSxBQWlMSDtBQUNSLFVBQUksd0JBQUE7S0FDTDs7QUFFRCxVQUFNLENBQUMsY0FBYyxRQUFPLFNBQVMsRUFBRTtBQUNyQyxnQkFBVSxFQUFHLEtBQUs7QUFDbEIsV0FBSyxFQUFHO0FBQ04sYUFBSyxFQUFHLE1BQUssT0FBTyxDQUFDLEtBQUs7T0FDM0I7S0FDRixDQUFDLENBQUM7O0FBRUgsUUFBSSxPQUFPLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDNUMsWUFBSyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQzNEOztHQUNGOztTQXZMVSxPQUFPO1FBTlgsSUFBSSIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgeyBzdGFuZGFydCB9IGZyb20gJy4vc3RhbmRhcnQnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG5vZC9iYXNlJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIENvbnNvbGUgZXh0ZW5kcyBCYXNlIHtcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGhpZ2hsaWdodCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGpzb24gICAgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIHN0YWNrRGVwdGggOiBvcHRpb25hbChOdW1iZXIpLFxuICAgIGxldmVscyAgICAgOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKClcbiAgICAgIC5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbc3RhY2tEZXB0aF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUk9URUNURURdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMub3B0aW9ucy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblxuICAgIHN1cGVyKG9wdGlvbnMsIHtcbiAgICAgIGVuYWJsZWQgICAgOiB0cnVlLFxuICAgICAgbG9nVHlwZXMgICA6IGZhbHNlLFxuICAgICAgbGV2ZWwgICAgICA6ICd3YXJuJyxcbiAgICAgIGhpZ2hsaWdodCAgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgICBzdGFja0RlcHRoIDogNyxcbiAgICAgIGxldmVscyAgICAgOiB7XG4gICAgICAgIGVycm9yIDogMSxcbiAgICAgICAgd2FybiAgOiAyLFxuICAgICAgICBpbmZvICA6IDMsXG4gICAgICAgIGxvZyAgIDogNCxcbiAgICAgICAgZGVidWcgOiA1XG4gICAgICB9LFxuICAgICAgc3RhbmRhcnQsXG4gICAgICBqc29uXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgbGV2ZWwgOiB0aGlzLm9wdGlvbnMubGV2ZWxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
