import path from 'path';
import { Environment } from '@nod/environment';

let
  configConsole = (new Environment({
    root : path.resolve('.')
  })).config,
  configRoot = (new Environment()).config;

export let env = Object.assign({
  console : {}
}, configRoot, configConsole);

env.console = Object.assign(
  env.console, configRoot.console, configConsole.console
);

export default env;
