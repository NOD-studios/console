'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('source-map-support/register');

var _cardinal = require('cardinal');

var _cardinal2 = _interopRequireDefault(_cardinal);

var _stackTrace = require('stack-trace');

var _stackTrace2 = _interopRequireDefault(_stackTrace);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _circularJson = require('circular-json');

var _circularJson2 = _interopRequireDefault(_circularJson);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _decorateThis = require('decorate-this');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodEnvironment = require('@nod/environment');

var PRIVATE = _Symbol('PRIVATE');

var standart = {
  output: function output() {},
  error: function error() {}
};

if (console) {
  _Object$assign(standart, {
    output: console.log.bind(console),
    error: console.error.bind(console)
  });
}

if (process) {
  _Object$assign(standart, {
    output: process.stdout.write.bind(process.stdout),
    error: process.stderr.write.bind(process.stdout)
  });
}

var Console = (function () {
  _createDecoratedClass(Console, [{
    key: 'setOptions',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)({
      standart: (0, _decorateThis.Optional)(Object),
      enabled: (0, _decorateThis.Optional)(Boolean),
      logTypes: (0, _decorateThis.Optional)(Boolean),
      config: (0, _decorateThis.Optional)(Object),
      highlight: (0, _decorateThis.Optional)(Object),
      json: (0, _decorateThis.Optional)(Object)
    }))],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      options = _Object$assign(this[PRIVATE].options, this.defaults, options);
      this.level = options.level;
      return options;
    }
  }, {
    key: 'options',
    get: function get() {
      return this[PRIVATE].options;
    },
    set: function set() {
      return this.setOptions.apply(this, arguments);
    }
  }]);

  function Console() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Console);

    this.levels = {
      error: 1,
      warn: 2,
      info: 3,
      log: 4,
      debug: 5
    };
    this.defaults = {
      enabled: true,
      logTypes: false,
      level: 'warn',
      highlight: _cardinal2['default'].highlight.bind(_cardinal2['default']),
      standart: standart,
      config: {
        console: {}
      },
      json: _circularJson2['default']
    };

    _Object$defineProperty(this, PRIVATE, {
      enumerable: false,
      value: {
        options: {},
        level: null
      }
    });
    this.options = options;

    if (this.options.config.console) {
      if (typeof this.options.config.console.level !== 'undefined') {
        this.level = this.options.config.console.level;
      }
      if (typeof this.options.config.console.enabled === 'booelan') {
        this.options.enabled = this.options.config.console.enabled;
      }
    }

    if (typeof this.options.config.silent === 'boolean') {
      this.options.enabled = this.options.config.silent ? false : true;
    }

    this.info(this.constructor.name + ': Initialized.');
  }

  _createDecoratedClass(Console, [{
    key: 'typify',
    decorators: [(0, _decorateThis.returns)(Object)],
    value: function typify() {
      var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

      var type = typeof param;
      return _defineProperty({}, type, param);
    }
  }, {
    key: 'stringify',
    decorators: [(0, _decorateThis.returns)(String)],
    value: function stringify() {
      var _this = this;

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (this.logTypes === true) {
        params = params.map(function (param) {
          return _this.typify(param);
        });
      }
      return this.options.json.stringify(params, null, 2);
    }
  }, {
    key: 'highlight',
    decorators: [(0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), (0, _decorateThis.param)(String)],
    value: function highlight() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      try {
        return this.options.highlight(params);
      } catch (error) {
        this.output('error', error);
        return false;
      }
    }
  }, {
    key: 'stack',
    decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(Number)],
    value: function stack() {
      var level = arguments.length <= 0 || arguments[0] === undefined ? 6 : arguments[0];

      return new Error().stack.split(_os2['default'].EOL)[level].replace("\t", '').trim();
    }
  }, {
    key: 'getLevel',
    decorators: [(0, _decorateThis.returns)(String)],
    value: function getLevel() {
      var value = this[PRIVATE].level,
          property = undefined;
      for (property in this.levels) {
        if (this.levels.hasOwnProperty(property)) {
          if (this.levels[property] === value) {
            return property;
          }
        }
      }
      return property;
    }
  }, {
    key: 'setLevel',
    decorators: [(0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean))],
    value: function setLevel() {
      var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

      if (typeof level === 'string') {
        if (this.levels[level]) {
          return this[PRIVATE].level = this.levels[level];
        }
      }
      if (typeof level === 'number') {
        level = this.getLevel();
        if (level !== false) {
          this[PRIVATE].level = level;
        }
      }
      return false;
    }
  }, {
    key: 'format',
    decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), (0, _decorateThis.param)((0, _decorateThis.Optional)(String))],
    value: function format() {
      var stack = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var level = arguments.length <= 1 || arguments[1] === undefined ? this.level : arguments[1];
      var params = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      level = level.toUpperCase();
      var output = '' + _os2['default'].EOL + level + ': ' + stack + _os2['default'].EOL + params + _os2['default'].EOL;
      return output;
    }
  }, {
    key: 'checkLevel',
    decorators: [(0, _decorateThis.returns)(Boolean), _autobindDecorator2['default']],
    value: function checkLevel() {
      var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

      if (this.levels[level] <= this.levels[this.level]) {
        return true;
      }
      return false;
    }
  }, {
    key: 'standart',
    decorators: [(0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), _autobindDecorator2['default']],
    value: function standart() {
      for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];
      var method = arguments.length <= 1 || arguments[1] === undefined ? 'output' : arguments[1];

      if (this.options.enabled !== true) {
        return false;
      }
      if (this.checkLevel(level) === false) {
        return false;
      }

      params = this.stringify.apply(this, _toConsumableArray(params));
      params = this.highlight(params);
      params = this.format(this.stack(), level, params);

      return this.options.standart[method](params);
    }
  }, {
    key: 'debug',
    decorators: [_autobindDecorator2['default']],
    value: function debug() {
      for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      return this.standart.apply(this, ['debug', 'output'].concat(params));
    }
  }, {
    key: 'log',
    decorators: [_autobindDecorator2['default']],
    value: function log() {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      return this.standart.apply(this, ['log', 'output'].concat(params));
    }
  }, {
    key: 'info',
    decorators: [_autobindDecorator2['default']],
    value: function info() {
      for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
      }

      return this.standart.apply(this, ['info', 'output'].concat(params));
    }
  }, {
    key: 'warn',
    decorators: [_autobindDecorator2['default']],
    value: function warn() {
      for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        params[_key6] = arguments[_key6];
      }

      return this.standart.apply(this, ['warn', 'error'].concat(params));
    }
  }, {
    key: 'error',
    decorators: [_autobindDecorator2['default']],
    value: function error() {
      for (var _len7 = arguments.length, params = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        params[_key7] = arguments[_key7];
      }

      return this.standart.apply(this, ['error', 'error'].concat(params));
    }
  }, {
    key: 'level',
    get: function get() {
      return this.getLevel();
    },
    set: function set() {
      return this.setLevel.apply(this, arguments);
    }
  }]);

  return Console;
})();

exports.Console = Console;
var console = new Console();
exports.console = console;
var error = console.error;
var warn = console.warn;
var info = console.info;
var log = console.log;
var debug = console.debug;
exports.error = error;
exports.warn = warn;
exports.info = info;
exports.log = log;
exports.debug = debug;

var environment = new _nodEnvironment.Environment({
  root: _path2['default'].resolve('' + _appRootPath2['default']),
  error: error, warn: warn, info: info, log: log, debug: debug
});
console.options.config = environment.config;
exports['default'] = Console;
//# sourceMappingURL=data:application/json;base64,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QWxDLElBQUk7SUFBRSxJQUFJLEdBQWlCLE9BQU8sQ0FBNUIsSUFBSTtJQUFFLEdBQUcsR0FBWSxPQUFPLENBQXRCLEdBQUc7SUFBRSxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLOzs7Ozs7O0FBQzFDLElBQUksV0FBVyxHQUFHLGdDQUFnQjtBQUNoQyxNQUFJLEVBQUcsa0JBQUssT0FBTywrQkFBa0I7QUFDckMsT0FBSyxFQUFMLEtBQUssRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsR0FBRyxFQUFILEdBQUcsRUFBRSxLQUFLLEVBQUwsS0FBSztDQUM5QixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO3FCQUM3QixPQUFPIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCBzdGFja1RyYWNlIGZyb20gJ3N0YWNrLXRyYWNlJztcbmltcG9ydCBhcHBSb290UGF0aCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5cbmxldCBzdGFuZGFydCA9IHtcbiAgb3V0cHV0IDogKCkgPT4ge30sXG4gIGVycm9yICA6ICgpID0+IHt9XG59O1xuXG5pZiAoY29uc29sZSkge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICBlcnJvciA6IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IHByb2Nlc3Muc3Rkb3V0LndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpLFxuICAgIGVycm9yIDogcHJvY2Vzcy5zdGRlcnIud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dClcbiAgfSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICA6IGZhbHNlLFxuICAgIGxldmVsICAgICA6ICd3YXJuJyxcbiAgICBoaWdobGlnaHQgOiBoaWdobGlnaHRlci5oaWdobGlnaHQuYmluZChoaWdobGlnaHRlciksXG4gICAgc3RhbmRhcnQsXG4gICAgY29uZmlnICAgIDoge1xuICAgICAgY29uc29sZSA6IHt9XG4gICAgfSxcbiAgICBqc29uXG4gIH07XG5cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5vcHRpb25zO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBzdGFuZGFydCAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGNvbmZpZyAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgaGlnaGxpZ2h0IDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpc1tQUklWQVRFXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFLCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge30sXG4gICAgICAgIGxldmVsICAgOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmxldmVsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLmNvbnNvbGUuZW5hYmxlZCA9PT0gJ2Jvb2VsYW4nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm91dHB1dCgnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhsZXZlbCA9IDYpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCkuc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW2xldmVsXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BSSVZBVEVdLmxldmVsLFxuICAgICAgcHJvcGVydHk7XG4gICAgZm9yKHByb3BlcnR5IGluIHRoaXMubGV2ZWxzKSB7XG4gICAgICBpZih0aGlzLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5sZXZlbHNbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzZXQgbGV2ZWwoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0TGV2ZWwoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEByZXR1cm5zKGFueU9mKE51bWJlciwgQm9vbGVhbikpXG4gIEBwYXJhbShhbnlPZihTdHJpbmcsIE51bWJlcikpXG4gIHNldExldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdKSB7XG4gICAgICAgIHJldHVybiB0aGlzW1BSSVZBVEVdLmxldmVsID0gdGhpcy5sZXZlbHNbbGV2ZWxdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgbGV2ZWwgPSB0aGlzLmdldExldmVsKCk7XG4gICAgICBpZiAobGV2ZWwgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSBsZXZlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBmb3JtYXQoc3RhY2sgPSAnJywgbGV2ZWwgPSB0aGlzLmxldmVsLCBwYXJhbXMgPSAnJykge1xuICAgIGxldmVsID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgb3V0cHV0ID0gYCR7b3MuRU9MfSR7bGV2ZWx9OiAke3N0YWNrfSR7b3MuRU9MfSR7cGFyYW1zfSR7b3MuRU9MfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhCb29sZWFuKVxuICBjaGVja0xldmVsKGxldmVsID0gdGhpcy5sZXZlbCkge1xuICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5sZXZlbHNbdGhpcy5sZXZlbF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoYW55T2YoQm9vbGVhbiwgU3RyaW5nKSlcbiAgc3RhbmRhcnQobGV2ZWwgPSB0aGlzLmxldmVsLCBtZXRob2QgPSAnb3V0cHV0JywgLi4ucGFyYW1zKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoZWNrTGV2ZWwobGV2ZWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHRoaXMuc3RyaW5naWZ5KC4uLnBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmZvcm1hdCh0aGlzLnN0YWNrKCksIGxldmVsLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFuZGFydFttZXRob2RdKHBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZGVidWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2RlYnVnJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgbG9nKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdsb2cnLCAnb3V0cHV0JywgIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgaW5mbyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnaW5mbycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIHdhcm4oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ3dhcm4nLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGVycm9yKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCBjb25zb2xlID0gbmV3IENvbnNvbGUoKTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoYCR7YXBwUm9vdFBhdGh9YCksXG4gIGVycm9yLCB3YXJuLCBpbmZvLCBsb2csIGRlYnVnXG59KTtcbmNvbnNvbGUub3B0aW9ucy5jb25maWcgPSBlbnZpcm9ubWVudC5jb25maWc7XG5leHBvcnQgZGVmYXVsdCBDb25zb2xlO1xuIl19