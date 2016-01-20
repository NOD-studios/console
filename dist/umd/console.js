(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', '@nod/base', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('os'), require('circular-json'), require('cardinal'), require('./standart'), require('autobind-decorator'), require('@nod/base'), require('decorate-this'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.os, global.circularJson, global.cardinal, global.standart, global.autobindDecorator, global.base, global.decorateThis, global.register, global.babelPolyfill);
    global.console = mod.exports;
  }
})(this, function (exports, _os, _circularJson, _cardinal, _standart, _autobindDecorator, _base, _decorateThis) {
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
});
//# sourceMappingURL=data:application/json;base64,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QVMsQ0FBQyxJQUFJLG9CQUFhO0FBQ3BELGtCQUFVLEVBQUcsQ0FBQztBQUNkLGNBQU0sRUFBTztBQUNYLGVBQUssRUFBRyxDQUFDO0FBQ1QsY0FBSSxFQUFJLENBQUM7QUFDVCxjQUFJLEVBQUksQ0FBQztBQUNULGFBQUcsRUFBSyxDQUFDO0FBQ1QsZUFBSyxFQUFHLENBQUM7U0FDVjtBQUNELGdCQUFRLG9CQUFBO0FBQ1IsWUFBSSx3QkFBQTtPQUNMOztBQUVELFlBQU0sQ0FBQyxjQUFjLFFBQU8sU0FBUyxFQUFFO0FBQ3JDLGtCQUFVLEVBQUcsS0FBSztBQUNsQixhQUFLLEVBQUc7QUFDTixlQUFLLEVBQUcsTUFBSyxPQUFPLENBQUMsS0FBSztTQUMzQjtPQUNGLENBQUMsQ0FBQzs7QUFFSCxVQUFJLE9BQU8sTUFBSyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUM1QyxjQUFLLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBSyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7T0FDM0Q7O0tBQ0Y7O1dBdkxVLE9BQU8iLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIGV4dGVuZHMgQmFzZSB7XG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKSxcbiAgICBsZXZlbHMgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQHJldHVybnMoT2JqZWN0KVxuICB0eXBpZnkocGFyYW0gPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVvZiBwYXJhbTtcbiAgICByZXR1cm4ge1xuICAgICAgW3R5cGVdIDogcGFyYW1cbiAgICB9O1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdHJpbmdpZnkoLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMubG9nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgcGFyYW1zID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICByZXR1cm4gdGhpcy50eXBpZnkocGFyYW0pO1xuICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5qc29uLnN0cmluZ2lmeShwYXJhbXMsIG51bGwsIDIpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoYW55T2YoU3RyaW5nLCBCb29sZWFuKSlcbiAgaGlnaGxpZ2h0KHBhcmFtcyA9ICcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2soc3RhY2tEZXB0aCA9IHRoaXMub3B0aW9ucy5zdGFja0RlcHRoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpXG4gICAgICAuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJPVEVDVEVEXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLm9wdGlvbnMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSB0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLm9wdGlvbnMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cbiAgICBzdXBlcihvcHRpb25zLCB7XG4gICAgICBlbmFibGVkICAgIDogdHJ1ZSxcbiAgICAgIGxvZ1R5cGVzICAgOiBmYWxzZSxcbiAgICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgICBoaWdobGlnaHQgIDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgICAgc3RhY2tEZXB0aCA6IDcsXG4gICAgICBsZXZlbHMgICAgIDoge1xuICAgICAgICBlcnJvciA6IDEsXG4gICAgICAgIHdhcm4gIDogMixcbiAgICAgICAgaW5mbyAgOiAzLFxuICAgICAgICBsb2cgICA6IDQsXG4gICAgICAgIGRlYnVnIDogNVxuICAgICAgfSxcbiAgICAgIHN0YW5kYXJ0LFxuICAgICAganNvblxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIGxldmVsIDogdGhpcy5vcHRpb25zLmxldmVsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
