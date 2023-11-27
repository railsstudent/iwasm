@external("env", "console.log")
export declare function consoleLog(message: String): void;

// @external('env', 'abort')
export function abort(msg?: string): void {
    throw new Error(msg || 'Abort called from wasm file');
}

export function log(from: String, n: i32): void {
    consoleLog(`${from} => ${n}`);
}

export function logTwoArguments(from: String, n: i32, n2: i32): void {
    consoleLog(`${from} => ${n}, ${n2}`);
}
