System.register(['babel-runtime/core-js/object/assign', 'console'], function (_export) {
  var _Object$assign, console, standart;

  return {
    setters: [function (_babelRuntimeCoreJsObjectAssign) {
      _Object$assign = _babelRuntimeCoreJsObjectAssign['default'];
    }, function (_console) {
      console = _console['default'];
    }],
    execute: function () {
      'use strict';

      standart = {
        output: function output() {},
        error: function error() {}
      };

      _export('standart', standart);

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

      _export('default', standart);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YW5kYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0JBRVcsUUFBUTs7Ozs7Ozs7Ozs7QUFBUixjQUFRLEdBQUc7QUFDcEIsY0FBTSxFQUFHLGtCQUFNLEVBQUU7QUFDakIsYUFBSyxFQUFJLGlCQUFNLEVBQUU7T0FDbEI7Ozs7QUFFRCxVQUFJLE9BQU8sRUFBRTtBQUNYLHVCQUFjLFFBQVEsRUFBRTtBQUN0QixnQkFBTSxFQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNsQyxlQUFLLEVBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BDLENBQUMsQ0FBQztPQUNKOztBQUVELFVBQUksT0FBTyxFQUFFO0FBQ1gsdUJBQWMsUUFBUSxFQUFFO0FBQ3RCLGdCQUFNLEVBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDbEQsZUFBSyxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ2xELENBQUMsQ0FBQztPQUNKOzt5QkFFYyxRQUFRIiwiZmlsZSI6InN0YW5kYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5cbmV4cG9ydCBsZXQgc3RhbmRhcnQgPSB7XG4gIG91dHB1dCA6ICgpID0+IHt9LFxuICBlcnJvciAgOiAoKSA9PiB7fVxufTtcblxuaWYgKGNvbnNvbGUpIHtcbiAgT2JqZWN0LmFzc2lnbihzdGFuZGFydCwge1xuICAgIG91dHB1dCA6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgZXJyb3IgOiBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhbmRhcnQsIHtcbiAgICBvdXRwdXQgOiBwcm9jZXNzLnN0ZG91dC53cml0ZS5iaW5kKHByb2Nlc3Muc3Rkb3V0KSxcbiAgICBlcnJvciA6IHByb2Nlc3Muc3RkZXJyLndyaXRlLmJpbmQocHJvY2Vzcy5zdGRvdXQpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFuZGFydDtcbiJdfQ==