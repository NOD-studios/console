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

var env = _Object$assign(configConsole, configRoot);
exports.env = env;
env.console = _Object$assign(configConsole.console, configRoot.console);

exports['default'] = env;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNLLGtCQUFrQjs7QUFFOUMsSUFDRSxhQUFhLEdBQUcsQUFBQyxnQ0FBZ0I7QUFDL0IsTUFBSSxFQUFHLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUM7Q0FDekIsQ0FBQyxDQUFFLE1BQU07SUFDVixVQUFVLEdBQUcsQUFBQyxpQ0FBaUIsQ0FBRSxNQUFNLENBQUM7O0FBRW5DLElBQUksR0FBRyxHQUFHLGVBQWMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUMxRCxHQUFHLENBQUMsT0FBTyxHQUFHLGVBQWMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O3FCQUV4RCxHQUFHIiwiZmlsZSI6ImVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcblxubGV0XG4gIGNvbmZpZ0NvbnNvbGUgPSAobmV3IEVudmlyb25tZW50KHtcbiAgICByb290IDogcGF0aC5yZXNvbHZlKCcuJylcbiAgfSkpLmNvbmZpZyxcbiAgY29uZmlnUm9vdCA9IChuZXcgRW52aXJvbm1lbnQoKSkuY29uZmlnO1xuXG5leHBvcnQgbGV0IGVudiA9IE9iamVjdC5hc3NpZ24oY29uZmlnQ29uc29sZSwgY29uZmlnUm9vdCk7XG5lbnYuY29uc29sZSA9IE9iamVjdC5hc3NpZ24oY29uZmlnQ29uc29sZS5jb25zb2xlLCBjb25maWdSb290LmNvbnNvbGUpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnY7XG4iXX0=