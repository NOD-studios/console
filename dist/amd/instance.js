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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFJVyxPQUFPLFdBQVAsT0FBTyxHQUFHLGFBRlosT0FBTyxFQUVrQjs7Ozs7Ozs7Ozs7b0JBRW5CLE9BQU8iLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5cbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKCk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
