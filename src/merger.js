import autobind from 'autobind-decorator';
import { Merger as BaseMerger } from '@nod/configuration';
import { param, returns, Optional as optional, AnyOf as anyOf } from 'decorate-this';

export class Merger extends BaseMerger {

  @autobind
  @param(optional({
    enabled    : optional(Boolean),
    logTypes   : optional(Boolean),
    level      : optional(anyOf(Number, String)),
    stackDepth : optional(Number),
    levels     : optional(Object)
  }))
  @returns(Object)
  setOptions(options = {}) {
    return super.setOptions(options);
  }

}

export default Merger;
