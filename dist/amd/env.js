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

  var env = (0, _babelRuntimeCoreJsObjectAssign['default'])({
    console: {}
  }, configRoot, configConsole);

  exports.env = env;
  env.console = (0, _babelRuntimeCoreJsObjectAssign['default'])(env.console, configRoot.console, configConsole.console);

  exports['default'] = env;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUNFLGFBQWEsR0FBRyxBQUFDLG9CQUhWLFdBQVcsQ0FHZTtBQUMvQixRQUFJLEVBQUcsa0JBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztHQUN6QixDQUFDLENBQUUsTUFBTTtNQUNWLFVBQVUsR0FBRyxBQUFDLG9CQU5QLFdBQVcsRUFNYSxDQUFFLE1BQU0sQ0FBQzs7QUFFbkMsTUFBSSxHQUFHLEdBQUcsZ0RBQWM7QUFDN0IsV0FBTyxFQUFHLEVBQUU7R0FDYixFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7O0FBRTlCLEtBQUcsQ0FBQyxPQUFPLEdBQUcsZ0RBQ1osR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQ3ZELENBQUM7O3VCQUVhLEdBQUciLCJmaWxlIjoiZW52LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5sZXRcbiAgY29uZmlnQ29uc29sZSA9IChuZXcgRW52aXJvbm1lbnQoe1xuICAgIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxuICB9KSkuY29uZmlnLFxuICBjb25maWdSb290ID0gKG5ldyBFbnZpcm9ubWVudCgpKS5jb25maWc7XG5cbmV4cG9ydCBsZXQgZW52ID0gT2JqZWN0LmFzc2lnbih7XG4gIGNvbnNvbGUgOiB7fVxufSwgY29uZmlnUm9vdCwgY29uZmlnQ29uc29sZSk7XG5cbmVudi5jb25zb2xlID0gT2JqZWN0LmFzc2lnbihcbiAgZW52LmNvbnNvbGUsIGNvbmZpZ1Jvb3QuY29uc29sZSwgY29uZmlnQ29uc29sZS5jb25zb2xlXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbnY7XG4iXX0=