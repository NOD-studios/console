'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standart = undefined;

require('source-map-support/register');

require('babel-polyfill');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU8sSUFBSSxRQUFRLFdBQVIsUUFBUSxHQUFHO0FBQ3BCLFFBQU0sRUFBRyxrQkFBTSxFQUFFO0FBQ2pCLE9BQUssRUFBSSxpQkFBTSxFQUFFO0NBQ2xCLENBQUM7O0FBRUYsdUJBQWE7QUFDWCxRQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUN0QixVQUFNLEVBQUcsa0JBQVEsR0FBRyxDQUFDLElBQUksbUJBQVM7QUFDbEMsU0FBSyxFQUFHLGtCQUFRLEtBQUssQ0FBQyxJQUFJLG1CQUFTO0dBQ3BDLENBQUMsQ0FBQztDQUNKOztBQUVELElBQUksT0FBTyxFQUFFO0FBQ1gsUUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDdEIsVUFBTSxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2xELFNBQUssRUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztHQUNsRCxDQUFDLENBQUM7Q0FDSjs7a0JBRWMsUUFBUSIsImZpbGUiOiJzdGFuZGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcblxuZXhwb3J0IGxldCBzdGFuZGFydCA9IHtcbiAgb3V0cHV0IDogKCkgPT4ge30sXG4gIGVycm9yICA6ICgpID0+IHt9XG59O1xuXG5pZiAoY29uc29sZSkge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICBlcnJvciA6IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IHByb2Nlc3Muc3Rkb3V0LndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpLFxuICAgIGVycm9yIDogcHJvY2Vzcy5zdGRlcnIud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dClcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW5kYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
