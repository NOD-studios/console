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