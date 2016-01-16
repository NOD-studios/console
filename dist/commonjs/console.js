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
//# sourceMappingURL=data:application/json;base64,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LEdBQUcsTUFBSyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDM0Q7O0FBRUQsaUVBQVk7R0FDYjs7U0E5TFUsT0FBTztRQUpYLElBQUkiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgeyBzdGFuZGFydCB9IGZyb20gJy4vc3RhbmRhcnQnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG5vZC9iYXNlJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIENvbnNvbGUgZXh0ZW5kcyBCYXNlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgIDogdHJ1ZSxcbiAgICBsb2dUeXBlcyAgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgICA6ICd3YXJuJyxcbiAgICBoaWdobGlnaHQgIDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgIHN0YWNrRGVwdGggOiA3LFxuICAgIHN0YW5kYXJ0LFxuICAgIGpzb25cbiAgfTtcblxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHN0YW5kYXJ0ICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgaGlnaGxpZ2h0ICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgc3RhY2tEZXB0aCA6IG9wdGlvbmFsKE51bWJlcilcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMubGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2soc3RhY2tEZXB0aCA9IHRoaXMub3B0aW9ucy5zdGFja0RlcHRoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpXG4gICAgICAuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMgPSB7fSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmVudi5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5lbnYuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5lbnYuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmVuYWJsZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5lbnYuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
