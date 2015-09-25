'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

require('source-map-support/register');

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _circularJson = require('circular-json');

var _circularJson2 = _interopRequireDefault(_circularJson);

var _cardinal = require('cardinal');

var _cardinal2 = _interopRequireDefault(_cardinal);

var _env = require('./env');

var _standart = require('./standart');

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _decorateThis = require('decorate-this');

var PRIVATE = _Symbol('PRIVATE');

var Console = (function () {
  _createDecoratedClass(Console, [{
    key: 'setOptions',
    decorators: [_decorateThis.returns(Object), _decorateThis.param(_decorateThis.Optional({
      standart: _decorateThis.Optional(Object),
      enabled: _decorateThis.Optional(Boolean),
      logTypes: _decorateThis.Optional(Boolean),
      env: _decorateThis.Optional(Object),
      highlight: _decorateThis.Optional(Object),
      json: _decorateThis.Optional(Object),
      stackDepth: _decorateThis.Optional(Number)
    }))],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      options = _Object$assign(this[PRIVATE].options, this.defaults, options);
      this.level = options.level;
      return options;
    }
  }, {
    key: 'typify',
    decorators: [_decorateThis.returns(Object)],
    value: function typify() {
      var _ref;

      var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

      var type = typeof param;
      return (_ref = {}, _ref[type] = param, _ref);
    }
  }, {
    key: 'stringify',
    decorators: [_decorateThis.returns(String)],
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
    decorators: [_decorateThis.returns(_decorateThis.AnyOf(String, Boolean)), _decorateThis.param(String)],
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
    decorators: [_decorateThis.returns(String), _decorateThis.param(Number)],
    value: function stack() {
      var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];

      var stack = new Error().stack;
      return stack.split(_os2['default'].EOL)[stackDepth].replace("\t", '').trim();
    }
  }, {
    key: 'getLevel',
    decorators: [_decorateThis.returns(String)],
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
    decorators: [_decorateThis.param(_decorateThis.AnyOf(String, Number)), _decorateThis.returns(_decorateThis.AnyOf(Number, Boolean))],
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
    decorators: [_decorateThis.returns(String), _decorateThis.param(_decorateThis.Optional(String)), _decorateThis.param(_decorateThis.Optional(String)), _decorateThis.param(_decorateThis.Optional(String))],
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
    decorators: [_decorateThis.returns(Boolean), _autobindDecorator2['default']],
    value: function checkLevel() {
      var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

      if (this.levels[level] <= this.levels[this.level]) {
        return true;
      }
      return false;
    }
  }, {
    key: 'standart',
    decorators: [_decorateThis.returns(_decorateThis.AnyOf(Boolean, String)), _autobindDecorator2['default']],
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

      params = this.stringify.apply(this, params);
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
    key: 'options',
    get: function get() {
      return this[PRIVATE].options;
    },
    set: function set() {
      return this.setOptions.apply(this, arguments);
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
      standart: _standart.standart,
      env: _env.env,
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

    if (this.options.env.console) {
      if (typeof this.options.env.console.level !== 'undefined') {
        this.level = this.options.env.console.level;
      }
      if (typeof this.options.env.console.enabled === 'booelan') {
        this.options.enabled = this.options.env.console.enabled;
      }
    }

    if (typeof this.options.env.silent === 'boolean') {
      this.options.enabled = this.options.env.silent ? false : true;
    }

    this.info(this.constructor.name + ': Initialized.');
  }

  return Console;
})();

exports.Console = Console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdXJrYW50dW5hbGkvU2l0ZXMvX1NhbmRib3gvTk9EL2NvbnNvbGUvc3JjL2NvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQUFPLDZCQUE2Qjs7a0JBQ3JCLElBQUk7Ozs7NEJBQ0YsZUFBZTs7Ozt3QkFDUixVQUFVOzs7O21CQUNkLE9BQU87O3dCQUNGLFlBQVk7O2lDQUNoQixvQkFBb0I7Ozs7NEJBRWxDLGVBQWU7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQU8sU0FBUyxDQUFDLENBQUM7O0lBRXJCLE9BQU87d0JBQVAsT0FBTzs7aUJBcUNqQixzQkFBUSxNQUFNLENBQUMsRUFUZixvQkFBTSx1QkFBUztBQUNkLGNBQVEsRUFBSyx1QkFBUyxNQUFNLENBQUM7QUFDN0IsYUFBTyxFQUFNLHVCQUFTLE9BQU8sQ0FBQztBQUM5QixjQUFRLEVBQUssdUJBQVMsT0FBTyxDQUFDO0FBQzlCLFNBQUcsRUFBTyx1QkFBUyxNQUFNLENBQUM7QUFDMUIsZUFBUyxFQUFJLHVCQUFTLE1BQU0sQ0FBQztBQUM3QixVQUFJLEVBQVMsdUJBQVMsTUFBTSxDQUFDO0FBQzdCLGdCQUFVLEVBQUcsdUJBQVMsTUFBTSxDQUFDO0tBQzlCLENBQUMsQ0FBQztXQUVPLHNCQUFlO1VBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQixhQUFPLEdBQUcsZUFBYyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkUsVUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLGFBQU8sT0FBTyxDQUFDO0tBQ2hCOzs7aUJBRUEsc0JBQVEsTUFBTSxDQUFDO1dBQ1Ysa0JBQW9COzs7VUFBbkIsS0FBSyx5REFBRyxTQUFTOztBQUN0QixVQUFJLElBQUksR0FBRyxPQUFPLEtBQUssQ0FBQztBQUN4Qiw4QkFDRyxJQUFJLElBQUks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LE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDekQsWUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztPQUN6RDtLQUNGOztBQUVELFFBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ2hELFVBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQy9EOztBQUVELFFBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9CQUFpQixDQUFDO0dBQ3JEOztTQS9NVSxPQUFPIiwiZmlsZSI6Ii9Vc2Vycy9mdXJrYW50dW5hbGkvU2l0ZXMvX1NhbmRib3gvTk9EL2NvbnNvbGUvc3JjL2NvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnY2lyY3VsYXItanNvbic7XG5pbXBvcnQgaGlnaGxpZ2h0ZXIgZnJvbSAnY2FyZGluYWwnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IHsgc3RhbmRhcnQgfSBmcm9tICcuL3N0YW5kYXJ0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUklWQVRFID0gU3ltYm9sKCdQUklWQVRFJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlIHtcbiAgbGV2ZWxzID0ge1xuICAgIGVycm9yIDogMSxcbiAgICB3YXJuICA6IDIsXG4gICAgaW5mbyAgOiAzLFxuICAgIGxvZyAgIDogNCxcbiAgICBkZWJ1ZyA6IDVcbiAgfTtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBlbmFibGVkICAgIDogdHJ1ZSxcbiAgICBsb2dUeXBlcyAgIDogZmFsc2UsXG4gICAgbGV2ZWwgICAgICA6ICd3YXJuJyxcbiAgICBoaWdobGlnaHQgIDogaGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0LmJpbmQoaGlnaGxpZ2h0ZXIpLFxuICAgIHN0YWNrRGVwdGggOiA3LFxuICAgIHN0YW5kYXJ0LFxuICAgIGVudixcbiAgICBqc29uXG4gIH07XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ub3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgc3RhbmRhcnQgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgZW5hYmxlZCAgICA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIGxvZ1R5cGVzICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBlbnYgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBoaWdobGlnaHQgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBqc29uICAgICAgIDogb3B0aW9uYWwoT2JqZWN0KSxcbiAgICBzdGFja0RlcHRoIDogb3B0aW9uYWwoTnVtYmVyKVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXNbUFJJVkFURV0ub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBAcmV0dXJucyhPYmplY3QpXG4gIHR5cGlmeShwYXJhbSA9IHVuZGVmaW5lZCkge1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgIHJldHVybiB7XG4gICAgICBbdHlwZV0gOiBwYXJhbVxuICAgIH07XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0cmluZ2lmeSguLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5sb2dUeXBlcyA9PT0gdHJ1ZSkge1xuICAgICBwYXJhbXMgPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgIHJldHVybiB0aGlzLnR5cGlmeShwYXJhbSk7XG4gICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmpzb24uc3RyaW5naWZ5KHBhcmFtcywgbnVsbCwgMik7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhhbnlPZihTdHJpbmcsIEJvb2xlYW4pKVxuICBoaWdobGlnaHQocGFyYW1zID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oaWdobGlnaHQocGFyYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zdGFuZGFydCgnZXJyb3InLCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHBhcmFtKE51bWJlcilcbiAgQHJldHVybnMoU3RyaW5nKVxuICBzdGFjayhzdGFja0RlcHRoID0gdGhpcy5vcHRpb25zLnN0YWNrRGVwdGgpIHtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gc3RhY2tcbiAgICAgIC5zcGxpdChvcy5FT0wpW3N0YWNrRGVwdGhdXG4gICAgICAgIC5yZXBsYWNlKFwiXFx0XCIsICcnKVxuICAgICAgICAudHJpbSgpO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldExldmVsKCk7XG4gIH1cblxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldExldmVsKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXNbUFJJVkFURV0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5sZXZlbHMpIHtcbiAgICAgIGlmKHRoaXMubGV2ZWxzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBpZih0aGlzLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsc1tsZXZlbF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbUFJJVkFURV0ubGV2ZWwgPSB0aGlzLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUklWQVRFXS5sZXZlbCA9IGxldmVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGZvcm1hdChzdGFjayA9ICcnLCBsZXZlbCA9IHRoaXMubGV2ZWwsIHBhcmFtcyA9ICcnKSB7XG4gICAgbGV2ZWwgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGxldCBvdXRwdXQgPSBgJHtvcy5FT0x9JHtsZXZlbH06ICR7c3RhY2t9JHtvcy5FT0x9JHtwYXJhbXN9JHtvcy5FT0x9YDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKEJvb2xlYW4pXG4gIGNoZWNrTGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHRoaXMubGV2ZWxzW2xldmVsXSA8PSB0aGlzLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFLCB7XG4gICAgICBlbnVtZXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSAgICAgIDoge1xuICAgICAgICBvcHRpb25zIDoge30sXG4gICAgICAgIGxldmVsICAgOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmxldmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmxldmVsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW52LmNvbnNvbGUuZW5hYmxlZCA9PT0gJ2Jvb2VsYW4nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmVudi5jb25zb2xlLmVuYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZW52LnNpbGVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5lbnYuc2lsZW50ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxufVxuIl19