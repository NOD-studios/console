define(['exports', 'path', 'babel-runtime/helpers/interop-require-default', '@nod/environment'], function (exports, _path, _babelRuntimeHelpersInteropRequireDefault, _nodEnvironment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var config = new _nodEnvironment.Environment({
    root: _path2['default'].resolve('.')
  }).config || {
    console: {}
  };
  exports.config = config;
  exports['default'] = config;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHTyxNQUFJLE1BQU0sR0FBRyxBQUFDLG9CQUZaLFdBQVcsQ0FFaUI7QUFDbkMsUUFBSSxFQUFHLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUM7R0FDekIsQ0FBQyxDQUFFLE1BQU0sSUFBSTtBQUNaLFdBQU8sRUFBRyxFQUFFO0dBQ2IsQ0FBQzs7dUJBQ2EsTUFBTSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnQG5vZC9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBsZXQgY29uZmlnID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxufSkpLmNvbmZpZyB8fCB7XG4gIGNvbnNvbGUgOiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==