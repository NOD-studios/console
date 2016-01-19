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
}(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'typify', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'highlight', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'highlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [_autobindDecorator2.default, _dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [_autobindDecorator2.default, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));
//# sourceMappingURL=data:application/json;base64,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YXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIGV4dGVuZHMgQmFzZSB7XG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKSxcbiAgICBsZXZlbHMgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2soc3RhY2tEZXB0aCA9IHRoaXMub3B0aW9ucy5zdGFja0RlcHRoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpXG4gICAgICAuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJPVEVDVEVEXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLm9wdGlvbnMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSB0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLm9wdGlvbnMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cbiAgICBzdXBlcihvcHRpb25zLCB7XG4gICAgICBlbmFibGVkICAgIDogdHJ1ZSxcbiAgICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgICBoaWdobGlnaHQgIDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgICBsZXZlbHMgICAgIDoge1xuICAgICAgICBlcnJvciA6IDEsXG4gICAgICAgIHdhcm4gIDogMixcbiAgICAgICAgaW5mbyAgOiAzLFxuICAgICAgICBsb2cgICA6IDQsXG4gICAgICAgIGRlYnVnIDogNVxuICAgICAgfSxcbiAgICAgIHN0YW5kYXJ0LFxuICAgICAganNvblxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIGxldmVsIDogMFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5sZXZlbDtcblxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
