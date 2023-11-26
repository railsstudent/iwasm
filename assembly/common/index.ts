@external("./log", "log")
export declare function log(f: String, n: i32): void;

@external("./error", "abort")
export declare function abort(msg?: String): void;
