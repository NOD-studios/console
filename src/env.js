import path from 'path';
import { Environment } from '@nod/environment';

let
  configConsole = (new Environment({
    root : path.resolve('.')
  })).config,
  configRoot = (new Environment()).config;

export let env = Object.assign(configConsole, configRoot);
env.console = Object.assign(configConsole.console, configRoot.console);

export default env;
