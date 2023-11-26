export function abort(msg?: string): void {
    throw new Error(msg || 'Abort called from wasm file');
}
