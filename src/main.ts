// Import the Aqua standard library //
import * as std from "../Aqua/lib/std";


// Import function //
std.imprt(/* Path to module */);


// Variables //
let iterations: number = 10;
const hello: string = "Hello";


// Print variables //
std.print(std.string(iterations)); // Number to string //
std.print(hello); // String //


// Function Declarations //
// Type Name     Function      Parameters //
// v     v          v              v
const fizzbuzz = std.fn(function (num: number): string | number {
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


// Print statements //
const print = std.fn(function (): void {
  std.nline(); // Makes a new line //
  std.print("Standard");
  std.printc(std.styles.normal, std.colors.red, "Error"); // This is how you would construct an error statement //
  std.printc(std.styles.normal, std.colors.yellow, "Warning"); // This is how you would construct a warning statement //
});


// Function calls //
print();


// Colors with printc //
const printColors = std.fn(function (): void {
  std.nline();
  std.printc(std.styles.normal, std.colors.reset, "Reset");
  std.printc(std.styles.normal, std.colors.red, "Red");
  std.printc(std.styles.normal, std.colors.green, "Green");
  std.printc(std.styles.normal, std.colors.blue, "Blue");
  std.printc(std.styles.normal, std.colors.cyan, "Cyan");
  std.printc(std.styles.normal, std.colors.magenta, "Magenta");
  std.printc(std.styles.normal, std.colors.white, "White");
  std.printc(std.styles.normal, std.colors.black, "Black");
});

printColors();


// Styles with printc //
const printStyles = std.fn((): void => {
    std.nline();
    std.printc(std.styles.bold, std.colors.normal, "Bold");
    std.printc(std.styles.underline, std.colors.normal, "Underline");
    std.printc(std.styles.reverse, std.styles.normal, "Reverse");
    std.printc(std.styles.normal, std.colors.normal, "Normal");
});

printStyles();