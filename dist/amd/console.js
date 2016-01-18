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
//# sourceMappingURL=data:application/json;base64,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QUMsT0FBTyxDQUFDO1NBQ3pEO09BQ0Y7O0FBRUQsVUFBSSxPQUFPLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDNUMsY0FBSyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO09BQzNEOztBQUVELG1FQUFZO0tBQ2I7O1dBOUxVLE9BQU87VUFKWCxJQUFJIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJ0Bub2QvYmFzZSc7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH1cbiAgZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIGV4dGVuZHMgQmFzZSB7XG4gIGxldmVscyA9IHtcbiAgICBlcnJvciA6IDEsXG4gICAgd2FybiAgOiAyLFxuICAgIGluZm8gIDogMyxcbiAgICBsb2cgICA6IDQsXG4gICAgZGVidWcgOiA1XG4gIH07XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZW5hYmxlZCAgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgICA6IGZhbHNlLFxuICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgaGlnaGxpZ2h0ICA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFja0RlcHRoIDogNyxcbiAgICBzdGFuZGFydCxcbiAgICBqc29uXG4gIH07XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGhpZ2hsaWdodCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGpzb24gICAgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIHN0YWNrRGVwdGggOiBvcHRpb25hbChOdW1iZXIpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKHN0YWNrRGVwdGggPSB0aGlzLm9wdGlvbnMuc3RhY2tEZXB0aCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoKVxuICAgICAgLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtzdGFja0RlcHRoXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BSSVZBVEVdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLmxldmVsID0gdGhpcy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zID0ge30pO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbnYuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUubGV2ZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUubGV2ZWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5lbnYuY29uc29sZS5lbmFibGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUuZW5hYmxlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
