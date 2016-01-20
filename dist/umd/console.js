System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define(['exports', 'os', 'circular-json', 'cardinal', './standart', 'autobind-decorator', '@nod/base', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], factory);
        } else if (typeof exports !== "undefined") {
          factory(exports, require('os'), require('circular-json'), require('cardinal'), require('./standart'), require('autobind-decorator'), require('@nod/base'), require('decorate-this'), require('source-map-support/register'), require('babel-polyfill'));
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, global.os, global.circularJson, global.cardinal, global.standart, global.autobindDecorator, global.base, global.decorateThis, global.register, global.babelPolyfill);
          global.console = mod.exports;
        }
      })(this, function (exports, _os, _circularJson, _cardinal, _standart, _autobindDecorator, _base, _decorateThis) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Console = undefined;

        var _os2 = _interopRequireDefault(_os);

        var _circularJson2 = _interopRequireDefault(_circularJson);

        var _cardinal2 = _interopRequireDefault(_cardinal);

        var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        var _typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
        };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var _get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);

          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;

            if (getter === undefined) {
              return undefined;
            }

            return getter.call(receiver);
          }
        };

        function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
          var desc = {};
          Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
          });
          desc.enumerable = !!desc.enumerable;
          desc.configurable = !!desc.configurable;

          if ('value' in desc || desc.initializer) {
            desc.writable = true;
          }

          desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
          }, desc);

          if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
          }

          if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
          }

          return desc;
        }

        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _desc, _value, _class;

        var PROTECTED = Symbol('PROTECTED');
        var Console = exports.Console = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
          standart: (0, _decorateThis.Optional)(Object),
          enabled: (0, _decorateThis.Optional)(Boolean),
          logTypes: (0, _decorateThis.Optional)(Boolean),
          highlight: (0, _decorateThis.Optional)(Object),
          json: (0, _decorateThis.Optional)(Object),
          stackDepth: (0, _decorateThis.Optional)(Number),
          levels: (0, _decorateThis.Optional)(Object)
        })), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.returns)(Object), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.param)(String), _dec6 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(String, Boolean)), _dec7 = (0, _decorateThis.param)(Number), _dec8 = (0, _decorateThis.returns)(String), _dec9 = (0, _decorateThis.returns)(String), _dec10 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Number, Boolean)), _dec11 = (0, _decorateThis.param)((0, _decorateThis.AnyOf)(String, Number)), _dec12 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec13 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec14 = (0, _decorateThis.param)((0, _decorateThis.Optional)(String)), _dec15 = (0, _decorateThis.returns)(String), _dec16 = (0, _decorateThis.returns)(Boolean), _dec17 = (0, _decorateThis.returns)((0, _decorateThis.AnyOf)(Boolean, String)), (_class = function (_Base) {
          _inherits(Console, _Base);

          _createClass(Console, [{
            key: 'setOptions',
            value: function setOptions() {
              var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

              return _get(Object.getPrototypeOf(Console.prototype), 'setOptions', this).call(this, options);
            }
          }, {
            key: 'typify',
            value: function typify() {
              var param = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

              var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
              return _defineProperty({}, type, param);
            }
          }, {
            key: 'stringify',
            value: function stringify() {
              var _this2 = this;

              for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
              }

              if (this.logTypes === true) {
                params = params.map(function (param) {
                  return _this2.typify(param);
                });
              }
              return this.options.json.stringify(params, null, 2);
            }
          }, {
            key: 'highlight',
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
            value: function stack() {
              var stackDepth = arguments.length <= 0 || arguments[0] === undefined ? this.options.stackDepth : arguments[0];

              return new Error().stack.split(_os2.default.EOL)[stackDepth].replace("\t", '').trim();
            }
          }, {
            key: 'getLevel',
            value: function getLevel() {
              var value = this[PROTECTED].level,
                  property = undefined;
              for (property in this.options.levels) {
                if (this.options.levels.hasOwnProperty(property)) {
                  if (this.options.levels[property] === value) {
                    return property;
                  }
                }
              }
              return property;
            }
          }, {
            key: 'setLevel',
            value: function setLevel() {
              var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

              if (typeof level === 'string') {
                if (this.options.levels[level]) {
                  return this[PROTECTED].level = this.options.levels[level];
                }
              }
              if (typeof level === 'number') {
                level = this.getLevel();
                if (level !== false) {
                  this[PROTECTED].level = level;
                }
              }
              return false;
            }
          }, {
            key: 'format',
            value: function format() {
              var stack = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
              var level = arguments.length <= 1 || arguments[1] === undefined ? this.level : arguments[1];
              var params = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

              level = level.toUpperCase();
              var output = '' + _os2.default.EOL + level + ': ' + stack + _os2.default.EOL + params + _os2.default.EOL;
              return output;
            }
          }, {
            key: 'checkLevel',
            value: function checkLevel() {
              var level = arguments.length <= 0 || arguments[0] === undefined ? this.level : arguments[0];

              if (this.options.levels[level] <= this.options.levels[this.level]) {
                return true;
              }
              return false;
            }
          }, {
            key: 'standart',
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
            value: function debug() {
              for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                params[_key3] = arguments[_key3];
              }

              return this.standart.apply(this, ['debug', 'output'].concat(params));
            }
          }, {
            key: 'log',
            value: function log() {
              for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                params[_key4] = arguments[_key4];
              }

              return this.standart.apply(this, ['log', 'output'].concat(params));
            }
          }, {
            key: 'info',
            value: function info() {
              for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                params[_key5] = arguments[_key5];
              }

              return this.standart.apply(this, ['info', 'output'].concat(params));
            }
          }, {
            key: 'warn',
            value: function warn() {
              for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                params[_key6] = arguments[_key6];
              }

              return this.standart.apply(this, ['warn', 'error'].concat(params));
            }
          }, {
            key: 'error',
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

          function Console() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            _classCallCheck(this, Console);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Console).call(this, options, {
              enabled: true,
              logTypes: false,
              level: 'warn',
              highlight: _cardinal2.default.highlight.bind(_cardinal2.default),
              stackDepth: 7,
              levels: {
                error: 1,
                warn: 2,
                info: 3,
                log: 4,
                debug: 5
              },
              standart: _standart.standart,
              json: _circularJson2.default
            }));

            Object.defineProperty(_this, PROTECTED, {
              enumerable: false,
              value: {
                level: _this.options.level
              }
            });

            if (typeof _this.options.silent === 'boolean') {
              _this.options.enabled = _this.options.silent ? false : true;
            }
            return _this;
          }

          return Console;
        }(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'typify', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'typify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stringify', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'stringify'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'highlight', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'highlight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'stack', [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'stack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getLevel', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setLevel', [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'setLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'format', [_dec12, _dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class.prototype, 'format'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'checkLevel', [_autobindDecorator2.default, _dec16], Object.getOwnPropertyDescriptor(_class.prototype, 'checkLevel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'standart', [_autobindDecorator2.default, _dec17], Object.getOwnPropertyDescriptor(_class.prototype, 'standart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'debug', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'debug'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'log', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'log'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'info', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'info'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'warn', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'warn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhYSxPQUFPLFdBQVAsT0FBTyxXQUNqQix5QkFBTSw0QkFBUztBQUNkLGtCQUFRLEVBQUssNEJBQVMsTUFBTSxDQUFDO0FBQzdCLGlCQUFPLEVBQU0sNEJBQVMsT0FBTyxDQUFDO0FBQzlCLGtCQUFRLEVBQUssNEJBQVMsT0FBTyxDQUFDO0FBQzlCLG1CQUFTLEVBQUksNEJBQVMsTUFBTSxDQUFDO0FBQzdCLGNBQUksRUFBUyw0QkFBUyxNQUFNLENBQUM7QUFDN0Isb0JBQVUsRUFBRyw0QkFBUyxNQUFNLENBQUM7QUFDN0IsZ0JBQU0sRUFBTyw0QkFBUyxNQUFNLENBQUM7U0FDOUIsQ0FBQyxDQUFDLFVBQ0YsMkJBQVEsTUFBTSxDQUFDLFVBS2YsMkJBQVEsTUFBTSxDQUFDLFVBUWYsMkJBQVEsTUFBTSxDQUFDLFVBVWYseUJBQU0sTUFBTSxDQUFDLFVBQ2IsMkJBQVEseUJBQU0sTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFVBVS9CLHlCQUFNLE1BQU0sQ0FBQyxVQUNiLDJCQUFRLE1BQU0sQ0FBQyxVQWFmLDJCQUFRLE1BQU0sQ0FBQyxXQWtCZiwyQkFBUSx5QkFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FDL0IseUJBQU0seUJBQU0sTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFdBZ0I1Qix5QkFBTSw0QkFBUyxNQUFNLENBQUMsQ0FBQyxXQUN2Qix5QkFBTSw0QkFBUyxNQUFNLENBQUMsQ0FBQyxXQUN2Qix5QkFBTSw0QkFBUyxNQUFNLENBQUMsQ0FBQyxXQUN2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akIsc0JBQVEsRUFBSyxLQUFLO0FBQ2xCLG1CQUFLLEVBQVEsTUFBTTtBQUNuQix1QkFBUyxFQUFJLG1CQUFZLFNBQVMsQ0FBQyxJQUFJLG9CQUFhO0FBQ3BELHdCQUFVLEVBQUcsQ0FBQztBQUNkLG9CQUFNLEVBQU87QUFDWCxxQkFBSyxFQUFHLENBQUM7QUFDVCxvQkFBSSxFQUFJLENBQUM7QUFDVCxvQkFBSSxFQUFJLENBQUM7QUFDVCxtQkFBRyxFQUFLLENBQUM7QUFDVCxxQkFBSyxFQUFHLENBQUM7ZUFDVjtBQUNELHNCQUFRLG9CQUFBO0FBQ1Isa0JBQUksd0JBQUE7YUFDTDs7QUFFRCxrQkFBTSxDQUFDLGNBQWMsUUFBTyxTQUFTLEVBQUU7QUFDckMsd0JBQVUsRUFBRyxLQUFLO0FBQ2xCLG1CQUFLLEVBQUc7QUFDTixxQkFBSyxFQUFHLE1BQUssT0FBTyxDQUFDLEtBQUs7ZUFDM0I7YUFDRixDQUFDLENBQUM7O0FBRUgsZ0JBQUksT0FBTyxNQUFLLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQzVDLG9CQUFLLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBSyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDM0Q7O1dBQ0Y7O2lCQXZMVSxPQUFPIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBqc29uIGZyb20gJ2NpcmN1bGFyLWpzb24nO1xuaW1wb3J0IGhpZ2hsaWdodGVyIGZyb20gJ2NhcmRpbmFsJztcbmltcG9ydCB7IHN0YW5kYXJ0IH0gZnJvbSAnLi9zdGFuZGFydCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9XG4gIGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgQ29uc29sZSBleHRlbmRzIEJhc2Uge1xuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHN0YW5kYXJ0ICAgOiBvcHRpb25hbChPYmplY3QpLFxuICAgIGVuYWJsZWQgICAgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICBsb2dUeXBlcyAgIDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgaGlnaGxpZ2h0ICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAganNvbiAgICAgICA6IG9wdGlvbmFsKE9iamVjdCksXG4gICAgc3RhY2tEZXB0aCA6IG9wdGlvbmFsKE51bWJlciksXG4gICAgbGV2ZWxzICAgICA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEByZXR1cm5zKE9iamVjdClcbiAgdHlwaWZ5KHBhcmFtID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0eXBlXSA6IHBhcmFtXG4gICAgfTtcbiAgfVxuXG4gIEByZXR1cm5zKFN0cmluZylcbiAgc3RyaW5naWZ5KC4uLnBhcmFtcykge1xuICAgIGlmICh0aGlzLmxvZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgIHBhcmFtcyA9IHBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgcmV0dXJuIHRoaXMudHlwaWZ5KHBhcmFtKTtcbiAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuanNvbi5zdHJpbmdpZnkocGFyYW1zLCBudWxsLCAyKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKGFueU9mKFN0cmluZywgQm9vbGVhbikpXG4gIGhpZ2hsaWdodChwYXJhbXMgPSAnJykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnN0YW5kYXJ0KCdlcnJvcicsICdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcGFyYW0oTnVtYmVyKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIHN0YWNrKHN0YWNrRGVwdGggPSB0aGlzLm9wdGlvbnMuc3RhY2tEZXB0aCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoKVxuICAgICAgLnN0YWNrXG4gICAgICAuc3BsaXQob3MuRU9MKVtzdGFja0RlcHRoXVxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCAnJylcbiAgICAgICAgLnRyaW0oKTtcbiAgfVxuXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMZXZlbCgpO1xuICB9XG5cbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRMZXZlbCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzW1BST1RFQ1RFRF0ubGV2ZWwsXG4gICAgICBwcm9wZXJ0eTtcbiAgICBmb3IocHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLmxldmVscykge1xuICAgICAgaWYodGhpcy5vcHRpb25zLmxldmVscy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmxldmVsc1twcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHNldCBsZXZlbCguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRMZXZlbCguLi5wYXJhbXMpO1xuICB9XG5cbiAgQHJldHVybnMoYW55T2YoTnVtYmVyLCBCb29sZWFuKSlcbiAgQHBhcmFtKGFueU9mKFN0cmluZywgTnVtYmVyKSlcbiAgc2V0TGV2ZWwobGV2ZWwgPSB0aGlzLmxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubGV2ZWxzW2xldmVsXSkge1xuICAgICAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmxldmVsID0gdGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICBsZXZlbCA9IHRoaXMuZ2V0TGV2ZWwoKTtcbiAgICAgIGlmIChsZXZlbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpc1tQUk9URUNURURdLmxldmVsID0gbGV2ZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBwYXJhbShvcHRpb25hbChTdHJpbmcpKVxuICBAcGFyYW0ob3B0aW9uYWwoU3RyaW5nKSlcbiAgQHBhcmFtKG9wdGlvbmFsKFN0cmluZykpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZm9ybWF0KHN0YWNrID0gJycsIGxldmVsID0gdGhpcy5sZXZlbCwgcGFyYW1zID0gJycpIHtcbiAgICBsZXZlbCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IG91dHB1dCA9IGAke29zLkVPTH0ke2xldmVsfTogJHtzdGFja30ke29zLkVPTH0ke3BhcmFtc30ke29zLkVPTH1gO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoQm9vbGVhbilcbiAgY2hlY2tMZXZlbChsZXZlbCA9IHRoaXMubGV2ZWwpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxldmVsc1tsZXZlbF0gPD0gdGhpcy5vcHRpb25zLmxldmVsc1t0aGlzLmxldmVsXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhhbnlPZihCb29sZWFuLCBTdHJpbmcpKVxuICBzdGFuZGFydChsZXZlbCA9IHRoaXMubGV2ZWwsIG1ldGhvZCA9ICdvdXRwdXQnLCAuLi5wYXJhbXMpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tMZXZlbChsZXZlbCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyYW1zID0gdGhpcy5zdHJpbmdpZnkoLi4ucGFyYW1zKTtcbiAgICBwYXJhbXMgPSB0aGlzLmhpZ2hsaWdodChwYXJhbXMpO1xuICAgIHBhcmFtcyA9IHRoaXMuZm9ybWF0KHRoaXMuc3RhY2soKSwgbGV2ZWwsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0YW5kYXJ0W21ldGhvZF0ocGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBkZWJ1ZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnZGVidWcnLCAnb3V0cHV0JywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBsb2coLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2xvZycsICdvdXRwdXQnLCAgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBpbmZvKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnN0YW5kYXJ0KCdpbmZvJywgJ291dHB1dCcsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgd2FybiguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFydCgnd2FybicsICdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgZXJyb3IoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhcnQoJ2Vycm9yJywgJ2Vycm9yJywgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXG4gICAgc3VwZXIob3B0aW9ucywge1xuICAgICAgZW5hYmxlZCAgICA6IHRydWUsXG4gICAgICBsb2dUeXBlcyAgIDogZmFsc2UsXG4gICAgICBsZXZlbCAgICAgIDogJ3dhcm4nLFxuICAgICAgaGlnaGxpZ2h0ICA6IGhpZ2hsaWdodGVyLmhpZ2hsaWdodC5iaW5kKGhpZ2hsaWdodGVyKSxcbiAgICAgIHN0YWNrRGVwdGggOiA3LFxuICAgICAgbGV2ZWxzICAgICA6IHtcbiAgICAgICAgZXJyb3IgOiAxLFxuICAgICAgICB3YXJuICA6IDIsXG4gICAgICAgIGluZm8gIDogMyxcbiAgICAgICAgbG9nICAgOiA0LFxuICAgICAgICBkZWJ1ZyA6IDVcbiAgICAgIH0sXG4gICAgICBzdGFuZGFydCxcbiAgICAgIGpzb25cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUk9URUNURUQsIHtcbiAgICAgIGVudW1lcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlIDoge1xuICAgICAgICBsZXZlbCA6IHRoaXMub3B0aW9ucy5sZXZlbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2lsZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdGhpcy5vcHRpb25zLnNpbGVudCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
