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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztvQkFFUyxPQUFPOzs7Ozs7Ozs7MEJBQ1AsYUFBYTs7Ozs7Ozs7a0JBRVAsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcbmV4cG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuZXhwb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
