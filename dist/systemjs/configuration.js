'use strict';

System.register(['@nod/configuration', './merger'], function (_export, _context) {
  var BaseConfiguration, Merger, Configuration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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

  return {
    setters: [function (_nodConfiguration) {
      BaseConfiguration = _nodConfiguration.Configuration;
    }, function (_merger) {
      Merger = _merger.Merger;
    }],
    execute: function () {
      _export('Configuration', Configuration = function (_BaseConfiguration) {
        _inherits(Configuration, _BaseConfiguration);

        function Configuration(Options, Merger) {
          var _Object$getPrototypeO;

          var _temp, _this;

          _classCallCheck(this, Configuration);

          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          var parent = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Configuration)).call.apply(_Object$getPrototypeO, [this, Merger].concat(args))), _this), _this.enabled = true, _this.logTypes = false, _this.level = 'warn', _this.stackDepth = 7, _this.levels = {
            error: 1,
            warn: 2,
            info: 3,
            log: 4,
            debug: 5
          }, _temp);
          Object.assign(_this, parent, _this);
          return _this;
        }

        return Configuration;
      }(BaseConfiguration));

      _export('Configuration', Configuration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FnQmtDLElBQUk7QUFBSixnQkFBSSIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiBhcyBCYXNlQ29uZmlndXJhdGlvbiB9IGZyb20gJ0Bub2QvY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBNZXJnZXIgfSBmcm9tICcuL21lcmdlcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIGV4dGVuZHMgQmFzZUNvbmZpZ3VyYXRpb24ge1xuICBlbmFibGVkICAgID0gdHJ1ZTtcbiAgbG9nVHlwZXMgICA9IGZhbHNlO1xuICBsZXZlbCAgICAgID0gJ3dhcm4nO1xuICBzdGFja0RlcHRoID0gNztcbiAgbGV2ZWxzICAgICA9IHtcbiAgICBlcnJvciA6IDEsXG4gICAgd2FybiAgOiAyLFxuICAgIGluZm8gIDogMyxcbiAgICBsb2cgICA6IDQsXG4gICAgZGVidWcgOiA1XG4gIH07XG5cbiAgY29uc3RydWN0b3IoT3B0aW9ucywgTWVyZ2VyLCAuLi5hcmdzKSB7XG4gICAgbGV0IHBhcmVudCA9IHN1cGVyKE1lcmdlciwgLi4uYXJncyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJlbnQsIHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
