// Import the Aqua standard library //
import * as std from "../Aqua/syntax/std";

// Variables //
let iterations: number = 10;
const hello = "Hello";

// Function Declarations //
// Type Name     Function      Parameters //
// v     v          v              v
const fizzbuzz = std.fn(function (num: number) {
  if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
  if (num % 5 === 0) return "Buzz";
  if (num % 3 === 0) return "Fizz";
  return num;
});

// For loops //
//    Initializer             Condition          Increment //
for (let number: number = 1; number <= iterations; number++) {
  std.print(fizzbuzz(number).toString());
}

// Print statments //
const print = std.fn(function () {
  std.nline(); // Makes a new line //
  std.print("Standard");
  std.printc(std.colors.red, "Error"); // This is how you would construct an error statment //
  std.printc(std.colors.yellow, "Warning"); // This is how you would construct a warning statment //
});

// Function calls //
print();

// Colors with printc //
const printColors = std.fn(function () {
  std.nline();
  std.printc(std.colors.reset, "Reset");
  std.printc(std.colors.red, "Red");
  std.printc(std.colors.green, "Green");
  std.printc(std.colors.blue, "Blue");
  std.printc(std.colors.cyan, "Cyan");
  std.printc(std.colors.magenta, "Magenta");
  std.printc(std.colors.white, "White");
  std.printc(std.colors.black, "Black");
});

printColors();
