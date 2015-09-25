System.register(['path', '@nod/environment'], function (_export) {
  'use strict';

  var path, Environment, config;
  return {
    setters: [function (_path) {
      path = _path['default'];
    }, function (_nodEnvironment) {
      Environment = _nodEnvironment.Environment;
    }],
    execute: function () {
      config = new Environment({
        root: path.resolve('.')
      }).config || {
        console: {}
      };

      _export('config', config);

      _export('default', config);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUJBR1csTUFBTTs7Ozs7b0NBRlIsV0FBVzs7O0FBRVQsWUFBTSxHQUFHLEFBQUMsSUFBSSxXQUFXLENBQUM7QUFDbkMsWUFBSSxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO09BQ3pCLENBQUMsQ0FBRSxNQUFNLElBQUk7QUFDWixlQUFPLEVBQUcsRUFBRTtPQUNiOzs7O3lCQUNjLE1BQU0iLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgbGV0IGNvbmZpZyA9IChuZXcgRW52aXJvbm1lbnQoe1xuICByb290IDogcGF0aC5yZXNvbHZlKCcuJylcbn0pKS5jb25maWcgfHwge1xuICBjb25zb2xlIDoge31cbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXX0=