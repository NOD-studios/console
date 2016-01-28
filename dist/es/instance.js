import { Console } from './console';
import { Configuration } from './configuration';

export let console = new Console(new Configuration());
export let { error, warn, info, log, debug } = console;
export default console;
