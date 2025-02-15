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

export const fn = (func: Function) => func;
export const imprt = fn((modulePath: string) => {
  // @ts-ignore | It's bad but it works so I'm keeping it //
  return import(modulePath) });
export const nline = fn((): void => console.log(""));
export const print = fn((msg: string): void => console.log(`${msg}`));
export const printc = fn((style: string, color: string, msg: string): void => console.log(`${style}${color}${msg}${colors.reset}`));
export const string = fn((value: number): string => { return value.toString() });
export const trimStart = fn((value: string): string => { // @ts-ignore //
  return value.trimStart() });
export const trimEnd = fn((value: string): string => { // @ts-ignore //
  return value.trimEnd() });
export const trimAll = fn((value: string): string => { // @ts-ignore //
    return value.trim(value.trim())});
imprt('std.ts');
