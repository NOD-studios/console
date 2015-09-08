# @nod/console
A javascript syntax highlighted console replacement that outputs JSON.

Supports ES5, ES7, CommonJS, System, ES6 modules, and AMD.
Works in node.js also should(?) work in browser.

[![Join the chat][gitter-image]][gitter-url]
[![GitHub tag][tag-image]][tag-url]
[![Dependency Status][david-image]][david-url]

# Usage:

## Installation:
```
npm install --save @nod/console
```

## Examples:

```javascript
import { log, error } from '@nod/console';

log('Simple log');
error('Simple error');
```

```javascript
import { console } from '@nod/console';

let { debug, info } = console;

error('DOH');
info('Too much info');
console.warn('This is a warning human !');
```

```javascript
import { Console } from '@nod/console';

let console = new Console({
  level : 'debug',
  standarts : {
    output : console.log.bind(console)
  }
});

console.debug(`Debugging the ${console.constructor.name}:`, console);
```

```javascript
require('@nod/console/dist/amd/js/index', function(console) {
  console.info('AMD and requirejs is so 2014.');
});
```

```javascript
var console = require('@nod/console/commonjs/js/index');
console.info('ES5 is boring.');
```

## Options:
```javascript
console.options = { // this will auto merge options
  enabled   : true, // disable and enable
  logTypes  : false, // log variable types, ~var_dump
  level     : 'debug', // debug < log < info < warn < error
  highlight : , // syntax highlighter function
  config    : {  // env configs
    console : {
      silent : false,
      level : null
    }
  },
  json      : () => {}, // JSON.stringify function
  standart  : {
    output : () => {}, // stdout function
    error  : () => {}, // stderr function
  }
};
```

## Build and develop:
```bash
gulp
```
or
```bash
npm run build
npm run watch
```
Please check available gulp tasks with:
```bash
gulp -T
```

## API
All methods have strict type checking please check source code.

# ToDo:
- Gulp tasks as another dependency
- More detailed docs

# Contact:
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
