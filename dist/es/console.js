import 'source-map-support/register';
import "babel-polyfill";
import os from 'os';
import json from 'circular-json';
import highlighter from 'cardinal';
import { standart } from './standart';
import autobind from 'autobind-decorator';
import { Base } from '@nod/base';
import { param, returns, Optional as optional, AnyOf as anyOf }
  from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Console extends Base {
  @param(optional({
    standart   : optional(Object),
    enabled    : optional(Boolean),
    logTypes   : optional(Boolean),
    highlight  : optional(Object),
    json       : optional(Object),
    stackDepth : optional(Number),
    levels     : optional(Object)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return super.setOptions(options);
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
      this.standart('error', 'error', error);
      return false;
    }
  }

  @param(Number)
  @returns(String)
  stack(stackDepth = this.options.stackDepth) {
    return new Error()
      .stack
      .split(os.EOL)[stackDepth]
        .replace("\t", '')
        .trim();
  }

  get level() {
    return this.getLevel();
  }

  @returns(String)
  getLevel() {
    let value = this[PROTECTED].level,
      property;
    for(property in this.options.levels) {
      if(this.options.levels.hasOwnProperty(property)) {
        if(this.options.levels[property] === value) {
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
    if (this.options.levels[level] <= this.options.levels[this.level]) {
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

  constructor(options = {}) {

    super(options, {
      enabled    : true,
      logTypes   : false,
      level      : 'warn',
      highlight  : highlighter.highlight.bind(highlighter),
      stackDepth : 7,
      levels     : {
        error : 1,
        warn  : 2,
        info  : 3,
        log   : 4,
        debug : 5
      },
      standart,
      json
    });

    Object.defineProperty(this, PROTECTED, {
      enumerable : false,
      value : {
        level : this.options.level
      }
    });

    if (typeof this.options.silent === 'boolean') {
      this.options.enabled = this.options.silent ? false : true;
    }
  }
}
