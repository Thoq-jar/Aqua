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
export function warn(msg: string) {
  console.warn(`${colors.yellow}[Warning]${colors.reset} ${msg}`);
}
export function nline() {
  console.log("");
}
export function print(msg: string) {
  console.log(`${msg}`);
}
export function printc(color: string, msg: string) {
  console.log(`${color}${msg}${colors.reset}`);
}
