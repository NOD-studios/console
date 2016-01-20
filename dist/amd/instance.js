define(['exports', './console', 'source-map-support/register', 'babel-polyfill'], function (exports, _console) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFJVyxPQUFPLFdBQVAsT0FBTyxHQUFHLHNCQUFhOzs7Ozs7Ozs7OztvQkFFbkIsT0FBTyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnLi9jb25zb2xlJztcblxuZXhwb3J0IGxldCBjb25zb2xlID0gbmV3IENvbnNvbGUoKTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
