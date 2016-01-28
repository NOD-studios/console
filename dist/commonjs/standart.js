'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standart = undefined;

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standart = exports.standart = {
  output: function output() {},
  error: function error() {}
};

if (_console2.default) {
  Object.assign(standart, {
    output: _console2.default.log.bind(_console2.default),
    error: _console2.default.error.bind(_console2.default)
  });
}

if (process) {
  Object.assign(standart, {
    output: process.stdout.write.bind(process.stdout),
    error: process.stderr.write.bind(process.stdout)
  });
}

exports.default = standart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFJLFFBQVEsV0FBUixRQUFRLEdBQUc7QUFDcEIsUUFBTSxFQUFHLGtCQUFNLEVBQUU7QUFDakIsT0FBSyxFQUFJLGlCQUFNLEVBQUU7Q0FDbEIsQ0FBQzs7QUFFRix1QkFBYTtBQUNYLFFBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3RCLFVBQU0sRUFBRyxrQkFBUSxHQUFHLENBQUMsSUFBSSxtQkFBUztBQUNsQyxTQUFLLEVBQUcsa0JBQVEsS0FBSyxDQUFDLElBQUksbUJBQVM7R0FDcEMsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsSUFBSSxPQUFPLEVBQUU7QUFDWCxRQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUN0QixVQUFNLEVBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbEQsU0FBSyxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKOztrQkFFYyxRQUFRIiwiZmlsZSI6InN0YW5kYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSdcblxuZXhwb3J0IGxldCBzdGFuZGFydCA9IHtcbiAgb3V0cHV0IDogKCkgPT4ge30sXG4gIGVycm9yICA6ICgpID0+IHt9XG59O1xuXG5pZiAoY29uc29sZSkge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICBlcnJvciA6IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IHByb2Nlc3Muc3Rkb3V0LndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpLFxuICAgIGVycm9yIDogcHJvY2Vzcy5zdGRlcnIud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dClcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW5kYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
