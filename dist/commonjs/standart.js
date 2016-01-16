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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFJLFFBQVEsV0FBUixRQUFRLEdBQUc7QUFDcEIsUUFBTSxFQUFHLGtCQUFNLEVBQUU7QUFDakIsT0FBSyxFQUFJLGlCQUFNLEVBQUU7Q0FDbEIsQ0FBQzs7QUFFRix1QkFBYTtBQUNYLFFBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3RCLFVBQU0sRUFBRyxrQkFBUSxHQUFHLENBQUMsSUFBSSxtQkFBUztBQUNsQyxTQUFLLEVBQUcsa0JBQVEsS0FBSyxDQUFDLElBQUksbUJBQVM7R0FDcEMsQ0FBQyxDQUFDO0NBQ0o7O0FBRUQsSUFBSSxPQUFPLEVBQUU7QUFDWCxRQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUN0QixVQUFNLEVBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbEQsU0FBSyxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKOztrQkFFYyxRQUFRIiwiZmlsZSI6InN0YW5kYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5cbmV4cG9ydCBsZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFuZGFydDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
