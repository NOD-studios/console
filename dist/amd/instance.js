define(['exports', './console', './configuration'], function (exports, _console, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debug = exports.log = exports.info = exports.warn = exports.error = exports.console = undefined;
  var console = exports.console = new _console.Console(new _configuration.Configuration());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFHVyxPQUFPLFdBQVAsT0FBTyxHQUFHLHFCQUFZLGtDQUFtQixDQUFDOzs7Ozs7Ozs7OztvQkFFdEMsT0FBTyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKG5ldyBDb25maWd1cmF0aW9uKCkpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xuZXhwb3J0IGRlZmF1bHQgY29uc29sZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
