System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define(['exports', 'console', 'source-map-support/register', 'babel-polyfill'], factory);
        } else if (typeof exports !== "undefined") {
          factory(exports, require('console'), require('source-map-support/register'), require('babel-polyfill'));
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, global.console, global.register, global.babelPolyfill);
          global.standart = mod.exports;
        }
      })(this, function (exports, _console) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.standart = undefined;

        var _console2 = _interopRequireDefault(_console);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        var standart = exports.standart = {
          output: function output() {},
          error: function error() {}
        };

        if (_console2.default) {
          Object.assign(standart, {
            output: _console2.default.log.bind(_console2.default),
            error: _console2.default.error.bind(_console2.default)
          });
        }

        if (process) {
          Object.assign(standart, {
            output: process.stdout.write.bind(process.stdout),
            error: process.stderr.write.bind(process.stdout)
          });
        }

        exports.default = standart;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVcsUUFBUSxXQUFSLFFBQVEsR0FBRztBQUNwQixnQkFBTSxFQUFHLGtCQUFNLEVBQUU7QUFDakIsZUFBSyxFQUFJLGlCQUFNLEVBQUU7U0FDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZ0JjLFFBQVEiLCJmaWxlIjoic3RhbmRhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5cbmV4cG9ydCBsZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFuZGFydDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
