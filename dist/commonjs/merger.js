'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Merger = undefined;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _configuration = require('@nod/configuration');

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _get(Object.getPrototypeOf(Merger.prototype), 'setOptions', this).call(this, options);
    }
  }]);

  return Merger;
}(_configuration.Merger), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
exports.default = Merger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWEsTUFBTSxXQUFOLE1BQU0sV0FHaEIseUJBQU0sNEJBQVM7QUFDZCxTQUFPLEVBQU0sNEJBQVMsT0FBTyxDQUFDO0FBQzlCLFVBQVEsRUFBSyw0QkFBUyxPQUFPLENBQUM7QUFDOUIsT0FBSyxFQUFRLDRCQUFTLHlCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxZQUFVLEVBQUcsNEJBQVMsTUFBTSxDQUFDO0FBQzdCLFFBQU0sRUFBTyw0QkFBUyxNQUFNLENBQUM7Q0FDOUIsQ0FBQyxDQUFDLFVBQ0YsMkJBQVEsTUFBTSxDQUFDO1lBVkwsTUFBTTs7V0FBTixNQUFNOzBCQUFOLE1BQU07O2tFQUFOLE1BQU07OztlQUFOLE1BQU07O2lDQVdRO1VBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQix3Q0FaUyxNQUFNLDRDQVlTLE9BQU8sRUFBRTtLQUNsQzs7O1NBYlUsTUFBTTs7a0JBaUJKLE1BQU0iLCJmaWxlIjoibWVyZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBNZXJnZXIgYXMgQmFzZU1lcmdlciB9IGZyb20gJ0Bub2QvY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmV4cG9ydCBjbGFzcyBNZXJnZXIgZXh0ZW5kcyBCYXNlTWVyZ2VyIHtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBlbmFibGVkICAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgbG9nVHlwZXMgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxldmVsICAgICAgOiBvcHRpb25hbChhbnlPZihOdW1iZXIsIFN0cmluZykpLFxuICAgIHN0YWNrRGVwdGggOiBvcHRpb25hbChOdW1iZXIpLFxuICAgIGxldmVscyAgICAgOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXJnZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
