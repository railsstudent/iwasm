import { log } from '../common/log';

export function addOne(n: i32): i32 {
    log('addOne', n);

    return n + 1;
}
