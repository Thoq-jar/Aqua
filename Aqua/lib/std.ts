export const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  white: "\x1b[37m",
  black: "\x1b[30m",
  normal: "\x1b[39m",
};

export const styles = {
  bold: "\x1b[1m",
  underline: "\x1b[4m",
  reverse: "\x1b[7m",
  normal: "\x1b[22m",
};

// @ts-ignore
export const imprt = fn((modulePath: string) => { return import(modulePath) });
export const fn = (func: Function) => func;
export const nline = fn((): void => console.log(""));
export const print = fn((msg: string): void => console.log(`${msg}`));
export const printc = fn((style: string, color: string, msg: string): void => console.log(`${style}${color}${msg}${colors.reset}`));
export const string = fn((value: number): string => { return value.toString() });

// Test the functions //
const test = fn(()=> {
  print("Hello, World!");
  printc(styles.normal, colors.normal, "Hello, World!");
  nline();
  imprt("");
  print(string(123));
});

test();