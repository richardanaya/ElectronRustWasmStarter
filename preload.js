WebAssembly.instantiateStreaming(fetch("addTwo.wasm"), {}).then(obj => {
  let lib = obj.instance.exports;
  console.log(lib);
  console.log(lib.addTwo(2, 2));
});
