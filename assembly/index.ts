// The entry file of your WebAssembly module.
import { log } from './common/log';

export function minusOne(n: i32): i32 {
  log(n);
  
  if (n === 44) {
    abort();
  }
  
  return n - 1;
}

export * from './math';
