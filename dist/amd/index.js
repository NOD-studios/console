define(['exports', './console', './configuration', 'babel-polyfill', 'source-map-support/register'], function (exports, _console, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = exports.Console = undefined;
  Object.defineProperty(exports, 'Console', {
    enumerable: true,
    get: function get() {
      return _console.Console;
    }
  });
  Object.defineProperty(exports, 'Configuration', {
    enumerable: true,
    get: function get() {
      return _configuration.Configuration;
    }
  });
  exports.default = Console;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0JBRVMsT0FBTzs7Ozs7OzRCQUNQLGFBQWE7OztvQkFFUCxPQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuZXhwb3J0IHsgQ29uc29sZSB9IGZyb20gJy4vY29uc29sZSc7XG5leHBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
