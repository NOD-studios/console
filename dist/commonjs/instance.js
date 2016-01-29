'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = exports.log = exports.info = exports.warn = exports.error = exports.console = undefined;

var _index = require('./index');

var console = exports.console = new _index.Console(new _index.Configuration());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVPLElBQUksT0FBTyxXQUFQLE9BQU8sR0FBRyxtQkFBWSwwQkFBbUIsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssR0FBNkIsT0FBTyxDQUF6QyxLQUFLO0lBQUUsSUFBSSxHQUF1QixPQUFPLENBQWxDLElBQUk7SUFBRSxJQUFJLEdBQWlCLE9BQU8sQ0FBNUIsSUFBSTtJQUFFLEdBQUcsR0FBWSxPQUFPLENBQXRCLEdBQUc7SUFBRSxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLOzs7Ozs7a0JBQzNCLE9BQU8iLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zb2xlLCBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKG5ldyBDb25maWd1cmF0aW9uKCkpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xuZXhwb3J0IGRlZmF1bHQgY29uc29sZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
