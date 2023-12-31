// The entry file of your WebAssembly module.
import { log } from './common';

export function minusOne(n: i32): i32 {
  log('minusOne', n);
  
  if (n === 44) {
    abort('44 is an unlucky number in Chinese');
  }
  
  return n - 1;
}

export function fizzbuzz(n: i32): String | null {
  log('fizzbuzz', n);

  if (n % 15 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  }

  return null;
}

memory.grow(2);
store<u8>(0, 21);
store<u8>(1, 99);

export function readMemory(n: i32): i32 {
  log('readMemory (index)', n)

  const valueAtIndexOne = load<u8>(n);
  return valueAtIndexOne;
}

export * from './math';
