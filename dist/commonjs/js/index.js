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
      level: 'debug',
      highlight: _cardinal2['default'].highlight.bind(_cardinal2['default']),
      config: {
        console: {}
      },
      standart: standart,
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

exports['default'] = Console;

var environment = new _nodEnvironment.Environment({
  root: _path2['default'].resolve('.'),
  warn: function warn() {},
  info: function info() {},
  debug: function debug() {}
});
var console = new Console({
  config: environment.config
});
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

environment.setOptions({ error: error, warn: warn, info: info, log: log, debug: debug });
exports['default'] = console;
//# sourceMappingURL=data:application/json;base64,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QUNoQixNQUFJLEVBQUksZ0JBQU0sRUFBRTtBQUNoQixPQUFLLEVBQUcsaUJBQU0sRUFBRTtDQUNqQixDQUFDLENBQUM7QUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztBQUMvQixRQUFNLEVBQUcsV0FBVyxDQUFDLE1BQU07Q0FDNUIsQ0FBQyxDQUFDOztJQUNVLEtBQUssR0FBNkIsT0FBTyxDQUF6QyxLQUFLO0lBQUUsSUFBSSxHQUF1QixPQUFPLENBQWxDLElBQUk7SUFBRSxJQUFJLEdBQWlCLE9BQU8sQ0FBNUIsSUFBSTtJQUFFLEdBQUcsR0FBWSxPQUFPLENBQXRCLEdBQUc7SUFBRSxLQUFLLEdBQUssT0FBTyxDQUFqQixLQUFLOzs7Ozs7O0FBQzFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxHQUFHLEVBQUgsR0FBRyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUMzQyxPQUFPIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCBzdGFja1RyYWNlIGZyb20gJ3N0YWNrLXRyYWNlJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5sZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgOiB0cnVlLFxuICAgIGxvZ1R5cGVzICA6IGZhbHNlLFxuICAgIGxldmVsICAgICA6ICdkZWJ1ZycsXG4gICAgaGlnaGxpZ2h0IDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgIGNvbmZpZyAgICA6IHtcbiAgICAgIGNvbnNvbGUgOiB7fVxuICAgIH0sXG4gICAgc3RhbmRhcnQsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGhpZ2hsaWdodCA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2sobGV2ZWwgPSA2KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtsZXZlbF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG59XG5cbmxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKSxcbiAgd2FybiAgOiAoKSA9PiB7fSxcbiAgaW5mbyAgOiAoKSA9PiB7fSxcbiAgZGVidWcgOiAoKSA9PiB7fVxufSk7XG5leHBvcnQgbGV0IGNvbnNvbGUgPSBuZXcgQ29uc29sZSh7XG4gIGNvbmZpZyA6IGVudmlyb25tZW50LmNvbmZpZ1xufSk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5lbnZpcm9ubWVudC5zZXRPcHRpb25zKHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl19