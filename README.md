# @nod/console
A console that can outputs syntax highlighted JSON with circular reference support

It also supports outputting circular references.

Supports ES5, ES7, CommonJS, System, ES6 modules, and AMD.
Works in node.js also should (not tested yet) work in browser.

[![GitHub tag][tag-image]][tag-url]
[![Build status][build-image]][build-url]
[![Dependency Status][david-image]][david-url]
[![Join the chat][gitter-image]][gitter-url]

##Usage:

### Installation:
```
npm install --save @nod/console
```

### Examples:

```javascript
import { Console, Configuration as ConsoleConfig } from '@nod/console';

let console = new Console(new ConsoleConfig());
let { error, warn, info, log, debug } = console;

log('Simple log');
error('DOH');
info('Too much info');
console.warn('This is a warning human !');
```

#### ES5 AMD
```javascript
require('@nod/console', function(nodConsole) {
  var console = new nodConsole.Console();
  console.info('RequireJS is so 2013.');
});
```

#### ES5 CommonJS
```javascript
var nodConsole = require('@nod/console');
var console = new nodConsole.Console();
console.info('ES5 is boring but it also works.');
```

#### Configuration
```javascript
import { Console, Configuration } from '@nod/console';

let options = new Configuration({ // this will auto merge options
  enabled   : true, // disable and enable switch
  logTypes  : false, // log also variable types
  level     : 'debug', // debug < log < info < warn < error
});

let standart = {
  output : console.log.bind(console),
  error : console.error.bind(console)
};

let console = new Console(options, standart);
```

All methods have strict type checking please check source code.

### Build and develop:
```bash
gulp
```
or
```bash
npm run default
```
Please check available gulp tasks with:
```bash
gulp -T
```

## TODO:
- Gulp tasks as another dependency
- Maybe add stream support
- Add inline docs

## Contact:
[![Send e-mail][mail-image]][mail-url]
[![Join the chat][gitter-image]][gitter-url]

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://nod.st)
by [NOD studios](http://nod.st)


[logo-image]: ./image/logo.strap.png?raw=true
[repo-url]: https://github.com/NOD-studios/console
[david-url]: https://david-dm.org/NOD-studios/console
[david-image]: https://david-dm.org/NOD-studios/console.svg
[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg
[gitter-url]: http://bit.ly/NOD-chat
[mail-image]: https://img.shields.io/badge/send-email-green.svg
[mail-url]: mailto:hey@nod.st
[tag-image]: https://img.shields.io/github/tag/NOD-studios/console.svg
[tag-url]: https://github.com/NOD-studios/console/tags
[build-image]: https://travis-ci.org/NOD-studios/console.svg
[build-url]: https://travis-ci.org/NOD-studios/console
