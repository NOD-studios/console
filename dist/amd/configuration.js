var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['exports', '@nod/configuration', './merger'], function (exports, _configuration, _merger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = undefined;

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

  var Configuration = exports.Configuration = function (_BaseConfiguration) {
    _inherits(Configuration, _BaseConfiguration);

    function Configuration(Options, Merger) {
      var _Object$getPrototypeO;

      var _temp, _this;

      _classCallCheck(this, Configuration);

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      var parent = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Configuration)).call.apply(_Object$getPrototypeO, [this, Merger].concat(args))), _this), _this.enabled = true, _this.logTypes = false, _this.level = 'warn', _this.stackDepth = 7, _this.levels = {
        error: 1,
        warn: 2,
        info: 3,
        log: 4,
        debug: 5
      }, _temp);
      Object.assign(_this, parent, _this);
      return _this;
    }

    return Configuration;
  }(_configuration.Configuration);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUdhLGFBQWEsV0FBYixhQUFhO2NBQWIsYUFBYTs7QUFheEIsYUFiVyxhQUFhLENBYVosT0FBTyxFQUFFLE1BQU0sRUFBVzs7Ozs7NEJBYjNCLGFBQWE7O3dDQWFRLElBQUk7QUFBSixZQUFJOzs7QUFDbEMsVUFBSSxNQUFNLHFHQWRELGFBQWEsNENBY0gsTUFBTSxTQUFLLElBQUksbUJBYnBDLE9BQU8sR0FBTSxJQUFJLFFBQ2pCLFFBQVEsR0FBSyxLQUFLLFFBQ2xCLEtBQUssR0FBUSxNQUFNLFFBQ25CLFVBQVUsR0FBRyxDQUFDLFFBQ2QsTUFBTSxHQUFPO0FBQ1gsYUFBSyxFQUFHLENBQUM7QUFDVCxZQUFJLEVBQUksQ0FBQztBQUNULFlBQUksRUFBSSxDQUFDO0FBQ1QsV0FBRyxFQUFLLENBQUM7QUFDVCxhQUFLLEVBQUcsQ0FBQztPQUNWLFFBR29DLENBQUM7QUFDcEMsWUFBTSxDQUFDLE1BQU0sUUFBTyxNQUFNLFFBQU8sQ0FBQzs7S0FDbkM7O1dBaEJVLGFBQWEiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24gYXMgQmFzZUNvbmZpZ3VyYXRpb24gfSBmcm9tICdAbm9kL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgTWVyZ2VyIH0gZnJvbSAnLi9tZXJnZXInO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiBleHRlbmRzIEJhc2VDb25maWd1cmF0aW9uIHtcbiAgZW5hYmxlZCAgICA9IHRydWU7XG4gIGxvZ1R5cGVzICAgPSBmYWxzZTtcbiAgbGV2ZWwgICAgICA9ICd3YXJuJztcbiAgc3RhY2tEZXB0aCA9IDc7XG4gIGxldmVscyAgICAgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKE9wdGlvbnMsIE1lcmdlciwgLi4uYXJncykge1xuICAgIGxldCBwYXJlbnQgPSBzdXBlcihNZXJnZXIsIC4uLmFyZ3MpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyZW50LCB0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
