import os from 'os';
import circularJson from 'circular-json';
import highlighter from 'cardinal';
import { standart } from './standart';
import autobind from 'autobind-decorator';
import { Configuration } from './configuration';
import { param, returns, Optional as optional, AnyOf as anyOf } from 'decorate-this';

const PROTECTED = Symbol('PROTECTED');

export class Console {

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
    return this.json.stringify(params, null, 2);
  }

  @param(String)
  @returns(anyOf(String, Boolean))
  safeHighlight(params = '') {
    try {
      return this.highlight(params);
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
  setLevel(level = this.optiopns.level) {
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
    params = this.safeHighlight(params);
    params = this.format(this.stack(), level, params);

    return this.standartIO[method](params);
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

  constructor(
    options = new Configuration(),
    standartIO = standart,
    json = circularJson,
    highlight = highlighter.highlight.bind(highlighter)
  ) {

    Object.defineProperty(this, PROTECTED, {
      enumerable : false,
      value : {
        level : options.level
      }
    });

    Object.assign(this, { options, standartIO, json, highlight });

    if (typeof this.options.silent === 'boolean') {
      this.options.enabled = this.options.silent ? false : true;
    }
  }
}
