(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index);
    global.instance = mod.exports;
  }
})(this, function (exports, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.debug = exports.log = exports.info = exports.warn = exports.error = exports.console = undefined;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFVyxPQUFPLFdBQVAsT0FBTyxHQUFHLG1CQUFZLDBCQUFtQixDQUFDOzs7Ozs7Ozs7OztvQkFFdEMsT0FBTyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNvbGUsIENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGxldCBjb25zb2xlID0gbmV3IENvbnNvbGUobmV3IENvbmZpZ3VyYXRpb24oKSk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
