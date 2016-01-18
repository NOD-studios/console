(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.standart = mod.exports;
  }
})(this, function () {
  define(['exports', 'console'], function (exports, _console) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRVcsUUFBUSxXQUFSLFFBQVEsR0FBRztBQUNwQixZQUFNLEVBQUcsa0JBQU0sRUFBRTtBQUNqQixXQUFLLEVBQUksaUJBQU0sRUFBRTtLQUNsQjs7Ozs7Ozs7Ozs7Ozs7OztzQkFnQmMsUUFBUSIsImZpbGUiOiJzdGFuZGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuXG5leHBvcnQgbGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhbmRhcnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
