import { Console, Configuration } from './index';

export let console = new Console(new Configuration());
export let { error, warn, info, log, debug } = console;
export default console;
