import { Configuration as BaseConfiguration } from '@nod/configuration';
import { Merger } from './merger';

export class Configuration extends BaseConfiguration {
  enabled    = true;
  logTypes   = false;
  level      = 'warn';
  stackDepth = 7;
  levels     = {
    error : 1,
    warn  : 2,
    info  : 3,
    log   : 4,
    debug : 5
  };

  constructor(Options, Merger, ...args) {
    let parent = super(Merger, ...args);
    Object.assign(this, parent, this);
  }
}
