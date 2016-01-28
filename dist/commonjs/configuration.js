'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = undefined;

var _configuration = require('@nod/configuration');

var _merger = require('./merger');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYSxhQUFhLFdBQWIsYUFBYTtZQUFiLGFBQWE7O0FBYXhCLFdBYlcsYUFBYSxDQWFaLE9BQU8sRUFBRSxNQUFNLEVBQVc7Ozs7OzBCQWIzQixhQUFhOztzQ0FhUSxJQUFJO0FBQUosVUFBSTs7O0FBQ2xDLFFBQUksTUFBTSxxR0FkRCxhQUFhLDRDQWNILE1BQU0sU0FBSyxJQUFJLG1CQWJwQyxPQUFPLEdBQU0sSUFBSSxRQUNqQixRQUFRLEdBQUssS0FBSyxRQUNsQixLQUFLLEdBQVEsTUFBTSxRQUNuQixVQUFVLEdBQUcsQ0FBQyxRQUNkLE1BQU0sR0FBTztBQUNYLFdBQUssRUFBRyxDQUFDO0FBQ1QsVUFBSSxFQUFJLENBQUM7QUFDVCxVQUFJLEVBQUksQ0FBQztBQUNULFNBQUcsRUFBSyxDQUFDO0FBQ1QsV0FBSyxFQUFHLENBQUM7S0FDVixRQUdvQyxDQUFDO0FBQ3BDLFVBQU0sQ0FBQyxNQUFNLFFBQU8sTUFBTSxRQUFPLENBQUM7O0dBQ25DOztTQWhCVSxhQUFhIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uIGFzIEJhc2VDb25maWd1cmF0aW9uIH0gZnJvbSAnQG5vZC9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IE1lcmdlciB9IGZyb20gJy4vbWVyZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBCYXNlQ29uZmlndXJhdGlvbiB7XG4gIGVuYWJsZWQgICAgPSB0cnVlO1xuICBsb2dUeXBlcyAgID0gZmFsc2U7XG4gIGxldmVsICAgICAgPSAnd2Fybic7XG4gIHN0YWNrRGVwdGggPSA3O1xuICBsZXZlbHMgICAgID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihPcHRpb25zLCBNZXJnZXIsIC4uLmFyZ3MpIHtcbiAgICBsZXQgcGFyZW50ID0gc3VwZXIoTWVyZ2VyLCAuLi5hcmdzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmVudCwgdGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
