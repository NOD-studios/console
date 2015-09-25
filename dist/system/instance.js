System.register(['./console'], function (_export) {
  'use strict';

  var Console, console, error, warn, info, log, debug;
  return {
    setters: [function (_console) {
      Console = _console.Console;
    }],
    execute: function () {
      console = new Console();

      _export('console', console);

      error = console.error;
      warn = console.warn;
      info = console.info;
      log = console.log;
      debug = console.debug;

      _export('error', error);

      _export('warn', warn);

      _export('info', info);

      _export('log', log);

      _export('debug', debug);

      _export('default', console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztlQUVXLE9BQU8sRUFDTCxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSzs7O3lCQUhqQyxPQUFPOzs7QUFFTCxhQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUU7Ozs7QUFDckIsV0FBSyxHQUE2QixPQUFPLENBQXpDLEtBQUs7QUFBRSxVQUFJLEdBQXVCLE9BQU8sQ0FBbEMsSUFBSTtBQUFFLFVBQUksR0FBaUIsT0FBTyxDQUE1QixJQUFJO0FBQUUsU0FBRyxHQUFZLE9BQU8sQ0FBdEIsR0FBRztBQUFFLFdBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Ozs7Ozs7Ozs7Ozt5QkFDM0IsT0FBTyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNvbGUgfSBmcm9tICcuL2NvbnNvbGUnO1xuXG5leHBvcnQgbGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSgpO1xuZXhwb3J0IGxldCB7IGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnIH0gPSBjb25zb2xlO1xuZXhwb3J0IGRlZmF1bHQgY29uc29sZTtcbiJdfQ==