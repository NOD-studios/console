'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodEnvironment = require('@nod/environment');

var configConsole = new _nodEnvironment.Environment({
  root: _path2['default'].resolve('.')
}).config,
    configRoot = new _nodEnvironment.Environment().config;

var env = _Object$assign({
  console: {}
}, configRoot, configConsole);

exports.env = env;
env.console = _Object$assign(env.console, configRoot.console, configConsole.console);

exports['default'] = env;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNLLGtCQUFrQjs7QUFFOUMsSUFDRSxhQUFhLEdBQUcsQUFBQyxnQ0FBZ0I7QUFDL0IsTUFBSSxFQUFHLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUM7Q0FDekIsQ0FBQyxDQUFFLE1BQU07SUFDVixVQUFVLEdBQUcsQUFBQyxpQ0FBaUIsQ0FBRSxNQUFNLENBQUM7O0FBRW5DLElBQUksR0FBRyxHQUFHLGVBQWM7QUFDN0IsU0FBTyxFQUFHLEVBQUU7Q0FDYixFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7O0FBRTlCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsZUFDWixHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FDdkQsQ0FBQzs7cUJBRWEsR0FBRyIsImZpbGUiOiJlbnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5cbmxldFxuICBjb25maWdDb25zb2xlID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gICAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpXG4gIH0pKS5jb25maWcsXG4gIGNvbmZpZ1Jvb3QgPSAobmV3IEVudmlyb25tZW50KCkpLmNvbmZpZztcblxuZXhwb3J0IGxldCBlbnYgPSBPYmplY3QuYXNzaWduKHtcbiAgY29uc29sZSA6IHt9XG59LCBjb25maWdSb290LCBjb25maWdDb25zb2xlKTtcblxuZW52LmNvbnNvbGUgPSBPYmplY3QuYXNzaWduKFxuICBlbnYuY29uc29sZSwgY29uZmlnUm9vdC5jb25zb2xlLCBjb25maWdDb25zb2xlLmNvbnNvbGVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGVudjtcbiJdfQ==