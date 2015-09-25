import path from 'path';
import { Environment } from '@nod/environment';

export let config = (new Environment({
  root : path.resolve('.')
})).config || {
  console : {}
};
export default config;
