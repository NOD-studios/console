var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'autobind-decorator', '@nod/configuration', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('autobind-decorator'), require('@nod/configuration'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.autobindDecorator, global.configuration, global.decorateThis);
    global.merger = mod.exports;
  }
})(this, function (exports, _autobindDecorator, _configuration, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Merger = undefined;

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
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

  var _dec, _dec2, _desc, _value, _class;

  var Merger = exports.Merger = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
    enabled: (0, _decorateThis.Optional)(Boolean),
    logTypes: (0, _decorateThis.Optional)(Boolean),
    level: (0, _decorateThis.Optional)((0, _decorateThis.AnyOf)(Number, String)),
    stackDepth: (0, _decorateThis.Optional)(Number),
    levels: (0, _decorateThis.Optional)(Object)
  })), _dec2 = (0, _decorateThis.returns)(Object), (_class = function (_BaseMerger) {
    _inherits(Merger, _BaseMerger);

    function Merger() {
      _classCallCheck(this, Merger);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Merger).apply(this, arguments));
    }

    _createClass(Merger, [{
      key: 'setOptions',
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return _get(Object.getPrototypeOf(Merger.prototype), 'setOptions', this);
      }
    }]);

    return Merger;
  }(_configuration.Merger), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
  exports.default = Merger;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUlhLE1BQU0sV0FBTixNQUFNLFdBR2hCLHlCQUFNLDRCQUFTO0FBQ2QsV0FBTyxFQUFNLDRCQUFTLE9BQU8sQ0FBQztBQUM5QixZQUFRLEVBQUssNEJBQVMsT0FBTyxDQUFDO0FBQzlCLFNBQUssRUFBUSw0QkFBUyx5QkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsY0FBVSxFQUFHLDRCQUFTLE1BQU0sQ0FBQztBQUM3QixVQUFNLEVBQU8sNEJBQVMsTUFBTSxDQUFDO0dBQzlCLENBQUMsQ0FBQyxVQUNGLDJCQUFRLE1BQU0sQ0FBQztjQVZMLE1BQU07O2FBQU4sTUFBTTs0QkFBTixNQUFNOztvRUFBTixNQUFNOzs7aUJBQU4sTUFBTTs7bUNBV1E7WUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ3JCLDBDQVpTLE1BQU0saUNBWVM7T0FDekI7OztXQWJVLE1BQU07O29CQWlCSixNQUFNIiwiZmlsZSI6Im1lcmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVyZ2VyIGFzIEJhc2VNZXJnZXIgfSBmcm9tICdAbm9kL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VyIGV4dGVuZHMgQmFzZU1lcmdlciB7XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsZXZlbCAgICAgIDogb3B0aW9uYWwoYW55T2YoTnVtYmVyLCBTdHJpbmcpKSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKSxcbiAgICBsZXZlbHMgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVyZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
