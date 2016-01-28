'use strict';

System.register(['babel-polyfill', 'source-map-support/register', './console', './configuration'], function (_export, _context) {
  return {
    setters: [function (_babelPolyfill) {}, function (_sourceMapSupportRegister) {}, function (_console) {
      var _exportObj = {};
      _exportObj.Console = _console.Console;

      _export(_exportObj);
    }, function (_configuration) {
      var _exportObj2 = {};
      _exportObj2.Configuration = _configuration.Configuration;

      _export(_exportObj2);
    }],
    execute: function () {
      _export('default', Console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
