'use strict';

System.register(['./console', './configuration'], function (_export, _context) {
  var Console, Configuration, console, error, warn, info, log, debug;
  return {
    setters: [function (_console) {
      Console = _console.Console;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
    }],
    execute: function () {
      _export('console', console = new Console(new Configuration()));

      _export('console', console);

      _export('error', error = console.error);

      _export('warn', warn = console.warn);

      _export('info', info = console.info);

      _export('log', log = console.log);

      _export('debug', debug = console.debug);

      _export('error', error);

      _export('warn', warn);

      _export('info', info);

      _export('log', log);

      _export('debug', debug);

      _export('default', console);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
