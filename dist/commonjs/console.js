'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Console = undefined;

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _circularJson = require('circular-json');

var _circularJson2 = _interopRequireDefault(_circularJson);

var _cardinal = require('cardinal');

var _cardinal2 = _interopRequireDefault(_cardinal);

var _standart = require('./standart');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _configuration = require('./configuration');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Console = exports.Console = (_dec = (0, _decorateThis.returns)(Object), _dec2 = (0, _decorateThis.returns)(String), _dec3 = (0, _decorateThis.param)(String), _dec4 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), _dec5 = (0, _decorateThis.param)(Number), _dec6 = (0, _decorateThis.returns)(String), _dec7 = (0, _decorateThis.returns)(String), _dec8 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean)), _dec9 = (0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), _dec10 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec11 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec12 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec13 = (0, _decorateThis.returns)(String), _dec14 = (0, _decorateThis.returns)(Boolean), _dec15 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), (_class = function () {
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
    var options = arguments.length <= 0 || arguments[0] === undefined ? new _configuration.Configuration() : arguments[0];
    var standartIO = arguments.length <= 1 || arguments[1] === undefined ? _standart.standart : arguments[1];
    var json = arguments.length <= 2 || arguments[2] === undefined ? _circularJson2.default : arguments[2];
    var highlight = arguments.length <= 3 || arguments[3] === undefined ? _cardinal2.default.highlight.bind(_cardinal2.default) : arguments[3];

    _classCallCheck(this, Console);

    Object.defineProperty(this, PROTECTED, {
      enumerable: false,
      value: {
        level: options.level
      }
    });

    Object.assign(this, { options: options, standartIO: standartIO, json: json, highlight: highlight });

    if (typeof this.options.silent === 'boolean') {
      this.options.enabled = this.options.silent ? false : true;
    }
  }

  return Console;
}(), (_applyDecoratedDescriptor(_class.prototype, 'typify', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'safeHighlight', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'safeHighlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec10, _dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [_autobindDecorator2.default, _dec14], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [_autobindDecorator2.default, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));
//# sourceMappingURL=data:application/json;base64,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bmltcG9ydCBjaXJjdWxhckpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgc2FmZUhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKClcbiAgICAgIC5zdGFja1xuICAgICAgLnNwbGl0KG9zLkVPTClbc3RhY2tEZXB0aF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUk9URUNURURdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5vcHRpb3Bucy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJPVEVDVEVEXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMub3B0aW9ucy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5zYWZlSGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0SU9bbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgc3RhbmRhcnRJTyA9IHN0YW5kYXJ0LFxuICAgIGpzb24gPSBjaXJjdWxhckpzb24sXG4gICAgaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpXG4gICkge1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIGxldmVsIDogb3B0aW9ucy5sZXZlbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIHN0YW5kYXJ0SU8sIGpzb24sIGhpZ2hsaWdodCB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5zaWxlbnQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
