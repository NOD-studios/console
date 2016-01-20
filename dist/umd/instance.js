System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define(['exports', './console', 'source-map-support/register', 'babel-polyfill'], factory);
        } else if (typeof exports !== "undefined") {
          factory(exports, require('./console'), require('source-map-support/register'), require('babel-polyfill'));
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, global.console, global.register, global.babelPolyfill);
          global.instance = mod.exports;
        }
      })(this, function (exports, _console) {
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVcsT0FBTyxXQUFQLE9BQU8sR0FBRyxzQkFBYTs7Ozs7Ozs7Ozs7MEJBRW5CLE9BQU8iLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5cbmV4cG9ydCBsZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKCk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
