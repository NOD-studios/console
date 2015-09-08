define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/helpers/to-consumable-array', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'babel-runtime/core-js/object/define-property', 'source-map-support/register', 'cardinal', 'babel-runtime/helpers/interop-require-default', 'stack-trace', 'app-root-path', 'circular-json', 'path', 'os', 'decorate-this', 'autobind-decorator', '@nod/environment'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeHelpersToConsumableArray, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _babelRuntimeCoreJsObjectDefineProperty, _sourceMapSupportRegister, _cardinal, _babelRuntimeHelpersInteropRequireDefault, _stackTrace, _appRootPath, _circularJson, _path, _os, _decorateThis, _autobindDecorator, _nodEnvironment) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _highlighter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_cardinal);

  var _stackTrace2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_stackTrace);

  var _appRootPath2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appRootPath);

  var _json = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_circularJson);

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _os2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_os);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var PRIVATE = (0, _babelRuntimeCoreJsSymbol['default'])('PRIVATE');

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
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: console.log.bind(console),
      error: console.error.bind(console)
    });
  }

  if (process) {
    (0, _babelRuntimeCoreJsObjectAssign['default'])(standart, {
      output: process.stdout.write.bind(process.stdout),
      error: process.stderr.write.bind(process.stdout)
    });
  }

  var Console = (function () {
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Console, [{
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

        options = (0, _babelRuntimeCoreJsObjectAssign['default'])(this[PRIVATE].options, this.defaults, options);
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
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Console);
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
        highlight: _highlighter['default'].highlight.bind(_highlighter['default']),
        standart: standart,
        config: config,
        json: _json['default']
      };

      (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(this, PRIVATE, {
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

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Console, [{
      key: 'typify',
      decorators: [(0, _decorateThis.returns)(Object)],
      value: function typify() {
        var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        var type = typeof param;
        return (0, _babelRuntimeHelpersDefineProperty['default'])({}, type, param);
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
      decorators: [(0, _decorateThis.returns)(Boolean), _autobind['default']],
      value: function checkLevel() {
        var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

        if (this.levels[level] <= this.levels[this.level]) {
          return true;
        }
        return false;
      }
    }, {
      key: 'standart',
      decorators: [(0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), _autobind['default']],
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

        params = this.stringify.apply(this, (0, _babelRuntimeHelpersToConsumableArray['default'])(params));
        params = this.highlight(params);
        params = this.format(this.stack(), level, params);

        return this.options.standart[method](params);
      }
    }, {
      key: 'debug',
      decorators: [_autobind['default']],
      value: function debug() {
        for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          params[_key3] = arguments[_key3];
        }

        return this.standart.apply(this, ['debug', 'output'].concat(params));
      }
    }, {
      key: 'log',
      decorators: [_autobind['default']],
      value: function log() {
        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        return this.standart.apply(this, ['log', 'output'].concat(params));
      }
    }, {
      key: 'info',
      decorators: [_autobind['default']],
      value: function info() {
        for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          params[_key5] = arguments[_key5];
        }

        return this.standart.apply(this, ['info', 'output'].concat(params));
      }
    }, {
      key: 'warn',
      decorators: [_autobind['default']],
      value: function warn() {
        for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          params[_key6] = arguments[_key6];
        }

        return this.standart.apply(this, ['warn', 'error'].concat(params));
      }
    }, {
      key: 'error',
      decorators: [_autobind['default']],
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
});
//# sourceMappingURL=data:application/json;base64,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SyxNQUFNLEVBQUMsQ0FBQztPQUNsRDs7OzthQUdJLGlCQUFZOzJDQUFSLE1BQU07QUFBTixnQkFBTTs7O0FBQ2IsZUFBTyxJQUFJLENBQUMsUUFBUSxNQUFBLENBQWIsSUFBSSxHQUFVLE9BQU8sRUFBRSxPQUFPLFNBQUssTUFBTSxFQUFDLENBQUM7T0FDbkQ7OztXQWxHUSxlQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDeEI7V0FnQlEsZUFBWTtBQUNuQixlQUFPLElBQUksQ0FBQyxRQUFRLE1BQUEsQ0FBYixJQUFJLFlBQW9CLENBQUM7T0FDakM7O1dBL0hVLE9BQU87Ozs7O0FBZ05wQixNQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO01BQ2YsS0FBSyxHQUE2QixPQUFPLENBQXpDLEtBQUs7TUFBRSxJQUFJLEdBQXVCLE9BQU8sQ0FBbEMsSUFBSTtNQUFFLElBQUksR0FBaUIsT0FBTyxDQUE1QixJQUFJO01BQUUsR0FBRyxHQUFZLE9BQU8sQ0FBdEIsR0FBRztNQUFFLEtBQUssR0FBSyxPQUFPLENBQWpCLEtBQUs7Ozs7Ozt1QkFDM0IsT0FBTyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICdjYXJkaW5hbCc7XG5pbXBvcnQgc3RhY2tUcmFjZSBmcm9tICdzdGFjay10cmFjZSc7XG5pbXBvcnQgYXBwUm9vdFBhdGggZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQganNvbiBmcm9tICdjaXJjdWxhci1qc29uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfVxuICBmcm9tICdkZWNvcmF0ZS10aGlzJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICdAbm9kL2Vudmlyb25tZW50JztcblxuY29uc3QgUFJJVkFURSA9IFN5bWJvbCgnUFJJVkFURScpO1xuXG5sZXQgY29uZmlnID0gKG5ldyBFbnZpcm9ubWVudCh7XG4gIHJvb3QgOiBwYXRoLnJlc29sdmUoJy4nKVxufSkpLmNvbmZpZyB8fCB7XG4gIGNvbnNvbGUgOiB7fVxufTtcblxubGV0IHN0YW5kYXJ0ID0ge1xuICBvdXRwdXQgOiAoKSA9PiB7fSxcbiAgZXJyb3IgIDogKCkgPT4ge31cbn07XG5cbmlmIChjb25zb2xlKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICAgIGVycm9yIDogY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpXG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcykge1xuICBPYmplY3QuYXNzaWduKHN0YW5kYXJ0LCB7XG4gICAgb3V0cHV0IDogcHJvY2Vzcy5zdGRvdXQud3JpdGUuYmluZChwcm9jZXNzLnN0ZG91dCksXG4gICAgZXJyb3IgOiBwcm9jZXNzLnN0ZGVyci53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KVxuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGUge1xuICBsZXZlbHMgPSB7XG4gICAgZXJyb3IgOiAxLFxuICAgIHdhcm4gIDogMixcbiAgICBpbmZvICA6IDMsXG4gICAgbG9nICAgOiA0LFxuICAgIGRlYnVnIDogNVxuICB9O1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGVuYWJsZWQgICA6IHRydWUsXG4gICAgbG9nVHlwZXMgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgIDogJ3dhcm4nLFxuICAgIGhpZ2hsaWdodCA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICBzdGFuZGFydCxcbiAgICBjb25maWcsXG4gICAganNvblxuICB9O1xuXG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBlbmFibGVkICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBjb25maWcgICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGhpZ2hsaWdodCA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJJVkFURSwge1xuICAgICAgZW51bWVyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgICAgICA6IHtcbiAgICAgICAgb3B0aW9ucyA6IHt9LFxuICAgICAgICBsZXZlbCAgIDogbnVsbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5sZXZlbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5jb25zb2xlLmVuYWJsZWQgPT09ICdib29lbGFuJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5jb25maWcuY29uc29sZS5lbmFibGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvbmZpZy5zaWxlbnQgPT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuY29uZmlnLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5vdXRwdXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBwYXJhbShOdW1iZXIpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RhY2sobGV2ZWwgPSA2KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtsZXZlbF1cbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgJycpXG4gICAgICAgIC50cmltKCk7XG4gIH1cblxuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWwoKTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0TGV2ZWwoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpc1tQUklWQVRFXS5sZXZlbCxcbiAgICAgIHByb3BlcnR5O1xuICAgIGZvcihwcm9wZXJ0eSBpbiB0aGlzLmxldmVscykge1xuICAgICAgaWYodGhpcy5sZXZlbHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIGlmKHRoaXMubGV2ZWxzW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc2V0IGxldmVsKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldExldmVsKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAcmV0dXJucyhhbnlPZihOdW1iZXIsIEJvb2xlYW4pKVxuICBAcGFyYW0oYW55T2YoU3RyaW5nLCBOdW1iZXIpKVxuICBzZXRMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUklWQVRFXS5sZXZlbCA9IHRoaXMubGV2ZWxzW2xldmVsXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGxldmVsID0gdGhpcy5nZXRMZXZlbCgpO1xuICAgICAgaWYgKGxldmVsICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzW1BSSVZBVEVdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5sZXZlbHNbbGV2ZWxdIDw9IHRoaXMubGV2ZWxzW3RoaXMubGV2ZWxdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKGFueU9mKEJvb2xlYW4sIFN0cmluZykpXG4gIHN0YW5kYXJ0KGxldmVsID0gdGhpcy5sZXZlbCwgbWV0aG9kID0gJ291dHB1dCcsIC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0xldmVsKGxldmVsKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB0aGlzLnN0cmluZ2lmeSguLi5wYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuaGlnaGxpZ2h0KHBhcmFtcyk7XG4gICAgcGFyYW1zID0gdGhpcy5mb3JtYXQodGhpcy5zdGFjaygpLCBsZXZlbCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhbmRhcnRbbWV0aG9kXShwYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGRlYnVnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdkZWJ1ZycsICdvdXRwdXQnLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGxvZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnbG9nJywgJ291dHB1dCcsICAuLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIGluZm8oLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2luZm8nLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICB3YXJuKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCd3YXJuJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBlcnJvciguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG59XG5cbmxldCBjb25zb2xlID0gbmV3IENvbnNvbGUoKTtcbmV4cG9ydCBsZXQgeyBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1ZyB9ID0gY29uc29sZTtcbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=