'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = exports.Console = undefined;

var _console = require('./console');

Object.defineProperty(exports, 'Console', {
  enumerable: true,
  get: function get() {
    return _console.Console;
  }
});

var _configuration = require('./configuration');

Object.defineProperty(exports, 'Configuration', {
  enumerable: true,
  get: function get() {
    return _configuration.Configuration;
  }
});

require('babel-polyfill');

require('source-map-support/register');

exports.default = Console;