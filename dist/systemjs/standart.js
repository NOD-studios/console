'use strict';

System.register(['console'], function (_export, _context) {
  var console, standart;
  return {
    setters: [function (_console) {
      console = _console.default;
    }],
    execute: function () {
      _export('standart', standart = {
        output: function output() {},
        error: function error() {}
      });

      _export('standart', standart);

      if (console) {
        Object.assign(standart, {
          output: console.log.bind(console),
          error: console.error.bind(console)
        });
      }

      if (process) {
        Object.assign(standart, {
          output: process.stdout.write.bind(process.stdout),
          error: process.stderr.write.bind(process.stdout)
        });
      }

      _export('default', standart);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFuZGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
