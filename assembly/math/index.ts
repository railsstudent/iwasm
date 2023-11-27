import { log, logTwoArguments } from '../common';

@external("env", "Math.random")
export declare function random(): f32;

export function addOne(n: i32): i32 {
    log('addOne', n);

    return n + 1;
}

export function getRandomArbitrary(min: i32, max: i32): f32 {
    logTwoArguments('getRandomArbitrary', min, max);

    return random() * f32((max - min) + min);
}
