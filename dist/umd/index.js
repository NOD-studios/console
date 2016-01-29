(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './configuration', './console', 'babel-polyfill', 'source-map-support/register'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./configuration'), require('./console'), require('babel-polyfill'), require('source-map-support/register'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.configuration, global.console, global.babelPolyfill, global.register);
    global.index = mod.exports;
  }
})(this, function (exports, _configuration, _console) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Console = exports.Configuration = undefined;
  Object.defineProperty(exports, 'Configuration', {
    enumerable: true,
    get: function get() {
      return _configuration.Configuration;
    }
  });
  Object.defineProperty(exports, 'Console', {
    enumerable: true,
    get: function get() {
      return _console.Console;
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRVMsYUFBYTs7Ozs7O3NCQUNiLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInXG5leHBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmV4cG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
