// Perform a Bitwise AND (&) operation between the numbers 5 and 3 and print the result.
let a = 5;
let b = 3;
console.log("Question 1: Bitwise AND (&)");
console.log("5 & 3 =", a & b);

// Perform a Bitwise OR (|) operation between the numbers 5 and 3 and print the result.
console.log("Question 2: Bitwise OR (|)");
console.log("5 | 3 =", a | b);

// Perform a Bitwise XOR (^) operation between the numbers 5 and 3 and print the result.
console.log("Question 3: Bitwise XOR (^)");
console.log("5 ^ 3 =", a ^ b);

// Write a program to demonstrate the Bitwise NOT (~) operator on a given integer.
let num1 = 5;
console.log("Question 4: Bitwise NOT (~)");
console.log("Original Number:", num1);
console.log("~5 =", ~num1);

// Use the Left Shift (<<) operator to shift the bits of the number 5 left by 2 positions.
let num2 = 5;
console.log("Question 5: Left Shift (<<)");
console.log("Original Number:", num2);
console.log("5 << 2 =", num2 << 2);

// Use the Signed Right Shift (>>) operator
let num3 = 20;
console.log("Question 6: Signed Right Shift (>>)");
console.log("Original Number:", num3);
console.log("20 >> 2 =", num3 >> 2);

// Use the Zero-fill Right Shift (>>>)
let num4 = -20;
console.log("Question 7: Zero-fill Right Shift (>>>)");
console.log("Original Number:", num4);
console.log("-20 >>> 2 =", num4 >>> 2);

// Write a program using Bitwise AND (& 1)
let num5 = 17;
console.log("Question 8: Check Odd or Even");
if ((num5 & 1) === 1) {
    console.log(num5 + " is Odd");
} else {
    console.log(num5 + " is Even");
}

// Write a program to double an integer
let num6 = 12;
console.log("Question 9: Double a Number");
console.log("Original Number:", num6);
console.log("Doubled Number:", num6 << 1);

// Write a program to halve an integer
let num7 = 20;
console.log("Question 10: Half a Number");
console.log("Original Number:", num7);
console.log("Half Number:", num7 >> 1);