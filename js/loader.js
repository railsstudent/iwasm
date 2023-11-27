// const imports = {
//     "env": {
//         abort(msg) {
//             throw new Error(msg || 'Abort called from wasm file');
//         }
//     },
//     "index": {
//         log(from, n) {
//             console.log(`${from} => ${n}`);
//         }        
//     }
// }

// class WasmLoader {
//     async wasm(path) {
//         console.log('Fetching', path, 'imports', imports);

//         if (!WebAssembly.instantiateStreaming) {
//             return this.wasmFallback(path, imports);
//         }

//         const instance = await WebAssembly.instantiateStreaming(fetch(path), imports);
//         console.log('instance', instance);

//         return instance?.instance?.exports;
//     }

//     async wasmFallback(path, imports) {
//         console.log('Using fallback', path);

//         const response = await fetch(path);
//         const bytes = await response?.arrayBuffer();
//         const { instance } = await WebAssembly.instantiate(bytes, imports);

//         return instance?.exports;
//     }
// }