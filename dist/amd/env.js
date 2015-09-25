define(['exports', 'babel-runtime/core-js/object/assign', 'path', 'babel-runtime/helpers/interop-require-default', '@nod/environment'], function (exports, _babelRuntimeCoreJsObjectAssign, _path, _babelRuntimeHelpersInteropRequireDefault, _nodEnvironment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var configConsole = new _nodEnvironment.Environment({
    root: _path2['default'].resolve('.')
  }).config,
      configRoot = new _nodEnvironment.Environment().config;

  var env = (0, _babelRuntimeCoreJsObjectAssign['default'])(configConsole, configRoot);
  exports.env = env;
  env.console = (0, _babelRuntimeCoreJsObjectAssign['default'])(configConsole.console, configRoot.console);

  exports['default'] = env;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUNFLGFBQWEsR0FBRyxBQUFDLG9CQUhWLFdBQVcsQ0FHZTtBQUMvQixRQUFJLEVBQUcsa0JBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztHQUN6QixDQUFDLENBQUUsTUFBTTtNQUNWLFVBQVUsR0FBRyxBQUFDLG9CQU5QLFdBQVcsRUFNYSxDQUFFLE1BQU0sQ0FBQzs7QUFFbkMsTUFBSSxHQUFHLEdBQUcsZ0RBQWMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUMxRCxLQUFHLENBQUMsT0FBTyxHQUFHLGdEQUFjLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzt1QkFFeEQsR0FBRyIsImZpbGUiOiJlbnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5cbmxldFxuICBjb25maWdDb25zb2xlID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gICAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpXG4gIH0pKS5jb25maWcsXG4gIGNvbmZpZ1Jvb3QgPSAobmV3IEVudmlyb25tZW50KCkpLmNvbmZpZztcblxuZXhwb3J0IGxldCBlbnYgPSBPYmplY3QuYXNzaWduKGNvbmZpZ0NvbnNvbGUsIGNvbmZpZ1Jvb3QpO1xuZW52LmNvbnNvbGUgPSBPYmplY3QuYXNzaWduKGNvbmZpZ0NvbnNvbGUuY29uc29sZSwgY29uZmlnUm9vdC5jb25zb2xlKTtcblxuZXhwb3J0IGRlZmF1bHQgZW52O1xuIl19