import 'source-map-support/register';
import highlighter from 'cardinal';
import stackTrace from 'stack-trace';
import appRootPath from 'app-root-path';
import json from 'circular-json';
import path from 'path';
import os from 'os';
import { param, returns, Optional as optional, AnyOf as anyOf }
  from 'decorate-this';
import autobind from 'autobind-decorator';
import { Environment } from '@nod/environment';

const PRIVATE = Symbol('PRIVATE');

let standart = {
  output : () => {},
  error  : () => {}
};

if (console) {
  Object.assign(standart, {
    output : console.log.bind(console),
    error : console.error.bind(console)
  });
}

if (process) {
  Object.assign(standart, {
    output : process.stdout.write.bind(process.stdout),
    error : process.stderr.write.bind(process.stdout)
  });
}

export class Console {
  levels = {
    error : 1,
    warn  : 2,
    info  : 3,
    log   : 4,
    debug : 5
  };

  defaults = {
    enabled   : true,
    logTypes  : false,
    level     : 'warn',
    highlight : highlighter.highlight.bind(highlighter),
    standart,
    config    : {
      console : {}
    },
    json
  };


  get options() {
    return this[PRIVATE].options;
  }

  set options(...params) {
    return this.setOptions(...params);
  }

  @param(optional({
    standart  : optional(Object),
    enabled   : optional(Boolean),
    logTypes  : optional(Boolean),
    config    : optional(Object),
    highlight : optional(Object),
    json      : optional(Object)
  }))
  @returns(Object)
  setOptions(options = {}) {
    options = Object.assign(this[PRIVATE].options, this.defaults, options);
    this.level = options.level;
    return options;
  }

  constructor(options = {}) {
    Object.defineProperty(this, PRIVATE, {
      enumerable : false,
      value      : {
        options : {},
        level   : null
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

    this.info(`${this.constructor.name}: Initialized.`);
  }

  @returns(Object)
  typify(param = undefined) {
    let type = typeof param;
    return {
      [type] : param
    };
  }

  @returns(String)
  stringify(...params) {
    if (this.logTypes === true) {
     params = params.map((param) => {
       return this.typify(param);
     });
    }
    return this.options.json.stringify(params, null, 2);
  }

  @param(String)
  @returns(anyOf(String, Boolean))
  highlight(params = '') {
    try {
      return this.options.highlight(params);
    } catch (error) {
      this.output('error', error);
      return false;
    }
  }

  @param(Number)
  @returns(String)
  stack(level = 6) {
    return new Error().stack
      .split(os.EOL)[level]
        .replace("\t", '')
        .trim();
  }

  get level() {
    return this.getLevel();
  }

  @returns(String)
  getLevel() {
    let value = this[PRIVATE].level,
      property;
    for(property in this.levels) {
      if(this.levels.hasOwnProperty(property)) {
        if(this.levels[property] === value) {
          return property;
        }
      }
    }
    return property;
  }

  set level(...params) {
    return this.setLevel(...params);
  }

  @returns(anyOf(Number, Boolean))
  @param(anyOf(String, Number))
  setLevel(level = this.level) {
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

  @param(optional(String))
  @param(optional(String))
  @param(optional(String))
  @returns(String)
  format(stack = '', level = this.level, params = '') {
    level = level.toUpperCase();
    let output = `${os.EOL}${level}: ${stack}${os.EOL}${params}${os.EOL}`;
    return output;
  }

  @autobind
  @returns(Boolean)
  checkLevel(level = this.level) {
    if (this.levels[level] <= this.levels[this.level]) {
      return true;
    }
    return false;
  }

  @autobind
  @returns(anyOf(Boolean, String))
  standart(level = this.level, method = 'output', ...params) {
    if (this.options.enabled !== true) {
      return false;
    }
    if (this.checkLevel(level) === false) {
      return false;
    }

    params = this.stringify(...params);
    params = this.highlight(params);
    params = this.format(this.stack(), level, params);

    return this.options.standart[method](params);
  }

  @autobind
  debug(...params) {
    return this.standart('debug', 'output', ...params);
  }

  @autobind
  log(...params) {
    return this.standart('log', 'output',  ...params);
  }

  @autobind
  info(...params) {
    return this.standart('info', 'output', ...params);
  }

  @autobind
  warn(...params) {
    return this.standart('warn', 'error', ...params);
  }

  @autobind
  error(...params) {
    return this.standart('error', 'error', ...params);
  }
}

export let console = new Console();
export let { error, warn, info, log, debug } = console;
let environment = new Environment({
  root : path.resolve(`${appRootPath}`)
});
console.options.config = environment.config;
export default Console;
