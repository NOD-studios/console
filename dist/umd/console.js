(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', './configuration', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('os'), require('circular-json'), require('cardinal'), require('./standart'), require('autobind-decorator'), require('./configuration'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.os, global.circularJson, global.cardinal, global.standart, global.autobindDecorator, global.configuration, global.decorateThis);
    global.console = mod.exports;
  }
})(this, function (exports, _os, _circularJson, _cardinal, _standart, _autobindDecorator, _configuration, _decorateThis) {
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _class;

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
});
//# sourceMappingURL=data:application/json;base64,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bXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGNpcmN1bGFySnNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgeyBzdGFuZGFydCB9IGZyb20gJy4vc3RhbmRhcnQnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBzYWZlSGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKHN0YWNrRGVwdGggPSB0aGlzLm9wdGlvbnMuc3RhY2tEZXB0aCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoKVxuICAgICAgLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtzdGFja0RlcHRoXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLmxldmVscykge1xuICAgICAgaWYodGhpcy5vcHRpb25zLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLm9wdGlvcG5zLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmxldmVsID0gdGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUk9URUNURURdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5vcHRpb25zLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLnNhZmVIaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnRJT1ttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zID0gbmV3IENvbmZpZ3VyYXRpb24oKSxcbiAgICBzdGFuZGFydElPID0gc3RhbmRhcnQsXG4gICAganNvbiA9IGNpcmN1bGFySnNvbixcbiAgICBoaWdobGlnaHQgPSBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlcilcbiAgKSB7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgbGV2ZWwgOiBvcHRpb25zLmxldmVsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgb3B0aW9ucywgc3RhbmRhcnRJTywganNvbiwgaGlnaGxpZ2h0IH0pO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
