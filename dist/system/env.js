System.register(['babel-runtime/core-js/object/assign', 'path', '@nod/environment'], function (_export) {
  var _Object$assign, path, Environment, configConsole, configRoot, env;

  return {
    setters: [function (_babelRuntimeCoreJsObjectAssign) {
      _Object$assign = _babelRuntimeCoreJsObjectAssign['default'];
    }, function (_path) {
      path = _path['default'];
    }, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }],
    execute: function () {
      'use strict';

      configConsole = new Environment({
        root: path.resolve('.')
      }).config;
      configRoot = new Environment().config;
      env = _Object$assign(configConsole, configRoot);

      _export('env', env);

      env.console = _Object$assign(configConsole.console, configRoot.console);

      _export('default', env);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lDQUlFLGFBQWEsRUFHYixVQUFVLEVBRUQsR0FBRzs7Ozs7Ozs7b0NBUkwsV0FBVzs7Ozs7QUFHbEIsbUJBQWEsR0FBRyxBQUFDLElBQUksV0FBVyxDQUFDO0FBQy9CLFlBQUksRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztPQUN6QixDQUFDLENBQUUsTUFBTTtBQUNWLGdCQUFVLEdBQUcsQUFBQyxJQUFJLFdBQVcsRUFBRSxDQUFFLE1BQU07QUFFOUIsU0FBRyxHQUFHLGVBQWMsYUFBYSxFQUFFLFVBQVUsQ0FBQzs7OztBQUN6RCxTQUFHLENBQUMsT0FBTyxHQUFHLGVBQWMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O3lCQUV4RCxHQUFHIiwiZmlsZSI6ImVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcblxubGV0XG4gIGNvbmZpZ0NvbnNvbGUgPSAobmV3IEVudmlyb25tZW50KHtcbiAgICByb290IDogcGF0aC5yZXNvbHZlKCcuJylcbiAgfSkpLmNvbmZpZyxcbiAgY29uZmlnUm9vdCA9IChuZXcgRW52aXJvbm1lbnQoKSkuY29uZmlnO1xuXG5leHBvcnQgbGV0IGVudiA9IE9iamVjdC5hc3NpZ24oY29uZmlnQ29uc29sZSwgY29uZmlnUm9vdCk7XG5lbnYuY29uc29sZSA9IE9iamVjdC5hc3NpZ24oY29uZmlnQ29uc29sZS5jb25zb2xlLCBjb25maWdSb290LmNvbnNvbGUpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnY7XG4iXX0=