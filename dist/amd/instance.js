define(['exports', './console'], function (exports, _console) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debug = exports.log = exports.info = exports.warn = exports.error = exports.console = undefined;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFFVyxPQUFPLFdBQVAsT0FBTyxHQUFHLGFBRlosT0FBTyxFQUVrQjs7Ozs7Ozs7Ozs7b0JBRW5CLE9BQU8iLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcblxuZXhwb3J0IGxldCBjb25zb2xlID0gbmV3IENvbnNvbGUoKTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
