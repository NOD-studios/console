import { Console } from './console';

export let console = new Console();
export let { error, warn, info, log, debug } = console;
export default console;
