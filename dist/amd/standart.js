define(['exports', 'babel-runtime/core-js/object/assign', 'console', 'babel-runtime/helpers/interop-require-default'], function (exports, _babelRuntimeCoreJsObjectAssign, _console, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _console2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_console);

  var standart = {
    output: function output() {},
    error: function error() {}
  };

  exports.standart = standart;
  if (_console2['default']) {
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: _console2['default'].log.bind(_console2['default']),
      error: _console2['default'].error.bind(_console2['default'])
    });
  }

  if (process) {
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: process.stdout.write.bind(process.stdout),
      error: process.stderr.write.bind(process.stdout)
    });
  }

  exports['default'] = standart;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVPLE1BQUksUUFBUSxHQUFHO0FBQ3BCLFVBQU0sRUFBRyxrQkFBTSxFQUFFO0FBQ2pCLFNBQUssRUFBSSxpQkFBTSxFQUFFO0dBQ2xCLENBQUM7OztBQUVGLDRCQUFhO0FBQ1gsb0RBQWMsUUFBUSxFQUFFO0FBQ3RCLFlBQU0sRUFBRyxxQkFBUSxHQUFHLENBQUMsSUFBSSxzQkFBUztBQUNsQyxXQUFLLEVBQUcscUJBQVEsS0FBSyxDQUFDLElBQUksc0JBQVM7S0FDcEMsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsTUFBSSxPQUFPLEVBQUU7QUFDWCxvREFBYyxRQUFRLEVBQUU7QUFDdEIsWUFBTSxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2xELFdBQUssRUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRCxDQUFDLENBQUM7R0FDSjs7dUJBRWMsUUFBUSIsImZpbGUiOiJzdGFuZGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuXG5leHBvcnQgbGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhbmRhcnQ7XG4iXX0=