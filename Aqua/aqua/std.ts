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
};

export const fn = (func: Function) => func;

export const nline = fn((): void => {
  console.log("");
});

export const print = fn((msg: string): void => {
  console.log(`${msg}`);
});

export const printc = fn((color: string, msg: string): void => {
  console.log(`${color}${msg}${colors.reset}`);
});
