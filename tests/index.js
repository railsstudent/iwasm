import assert from "assert";
import { minusOne, addOne } from "../build/debug.js";
assert.strictEqual(minusOne(43), 42);
assert.strictEqual(addOne(44), 45);
console.log("ok");
