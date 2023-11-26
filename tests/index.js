import assert from "assert";
import { minusOne, addOne, fizzbuzz } from "../build/debug.js";
assert.strictEqual(minusOne(43), 42);
assert.strictEqual(addOne(44), 45);
assert.strictEqual(fizzbuzz(3), 'fizz');
console.log("ok");
