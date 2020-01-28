// @ts-nocheck

/*
  globalThis is comming from duktape: https://duktape.org/guide.html#builtin-global
*/

const console = {};
console.log = print;

globalThis.setTimeout = function setTimeout(fn, delay) {
  // TODO: implement delay
  fn();
};

globalThis.console = console;
