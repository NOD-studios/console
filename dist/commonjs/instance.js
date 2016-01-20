'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = exports.log = exports.info = exports.warn = exports.error = exports.console = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _console = require('./console');

var console = exports.console = new _console.Console();
var error = console.error;
var warn = console.warn;
var info = console.info;
var log = console.log;
var debug = console.debug;
exports.error = error;
exports.warn = warn;
exports.info = info;
exports.log = log;
exports.debug = debug;
exports.default = console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJTyxJQUFJLE9BQU8sV0FBUCxPQUFPLEdBQUcsc0JBQWEsQ0FBQztJQUN0QixLQUFLLEdBQTZCLE9BQU8sQ0FBekMsS0FBSztJQUFFLElBQUksR0FBdUIsT0FBTyxDQUFsQyxJQUFJO0lBQUUsSUFBSSxHQUFpQixPQUFPLENBQTVCLElBQUk7SUFBRSxHQUFHLEdBQVksT0FBTyxDQUF0QixHQUFHO0lBQUUsS0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzs7Ozs7O2tCQUMzQixPQUFPIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuXG5leHBvcnQgbGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xuZXhwb3J0IGRlZmF1bHQgY29uc29sZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
