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

var _console2 = require('console');

var _console3 = _interopRequireDefault(_console2);

var PRIVATE = _Symbol('PRIVATE');

var config = new _nodEnvironment.Environment({
  root: _path2['default'].resolve('.')
}).config || {
  console: {}
};

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
      json: (0, _decorateThis.Optional)(Object),
      stackDepth: (0, _decorateThis.Optional)(Number)
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
      stackDepth: 7,
      standart: standart,
      config: config,
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
        this.standart('error', 'error', error);
        return false;
      }
    }
  }, {
    key: 'stack',
    decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(Number)],
    value: function stack() {
      var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];

      var stack = new Error().stack;
      return stack.split(_os2['default'].EOL)[stackDepth].replace("\t", '').trim();
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
exports['default'] = console;
//# sourceMappingURL=data:application/json;base64,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ZUFBRztBQUNWLGFBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3hCO1NBZ0JRLGVBQVk7QUFDbkIsYUFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxZQUFvQixDQUFDO0tBQ2pDOzs7U0FsSVUsT0FBTzs7Ozs7QUFtTnBCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDZixLQUFLLEdBQTZCLE9BQU8sQ0FBekMsS0FBSztJQUFFLElBQUksR0FBdUIsT0FBTyxDQUFsQyxJQUFJO0lBQUUsSUFBSSxHQUFpQixPQUFPLENBQTVCLElBQUk7SUFBRSxHQUFHLEdBQVksT0FBTyxDQUF0QixHQUFHO0lBQUUsS0FBSyxHQUFLLE9BQU8sQ0FBakIsS0FBSzs7Ozs7O3FCQUMzQixPQUFPIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCBhcHBSb290UGF0aCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJ0Bub2QvZW52aXJvbm1lbnQnO1xuaW1wb3J0IF9jb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5cbmxldCBjb25maWcgPSAobmV3IEVudmlyb25tZW50KHtcbiAgcm9vdCA6IHBhdGgucmVzb2x2ZSgnLicpXG59KSkuY29uZmlnIHx8IHtcbiAgY29uc29sZSA6IHt9XG59O1xuXG5sZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc29sZSB7XG4gIGxldmVscyA9IHtcbiAgICBlcnJvciA6IDEsXG4gICAgd2FybiAgOiAyLFxuICAgIGluZm8gIDogMyxcbiAgICBsb2cgICA6IDQsXG4gICAgZGVidWcgOiA1XG4gIH07XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZW5hYmxlZCAgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgICA6IGZhbHNlLFxuICAgIGxldmVsICAgICAgOiAnd2FybicsXG4gICAgaGlnaGxpZ2h0ICA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFja0RlcHRoIDogNyxcbiAgICBzdGFuZGFydCxcbiAgICBjb25maWcsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxufVxuXG5sZXQgY29uc29sZSA9IG5ldyBDb25zb2xlKCk7XG5leHBvcnQgbGV0IHsgZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWcgfSA9IGNvbnNvbGU7XG5leHBvcnQgZGVmYXVsdCBjb25zb2xlO1xuIl19