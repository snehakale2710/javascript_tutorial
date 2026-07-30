// 1. Check if a number is Even or Odd
let number1 = 12;
let result1 = (number1 % 2 === 0) ? "Even" : "Odd";
console.log("1. Even or Odd");
console.log("Number:", number1);
console.log("Result:", result1);

// 2. Check if a person is an Adult or Minor
let age = 20;
let result2 = (age >= 18) ? "Adult" : "Minor";
console.log("2. Adult or Minor");
console.log("Age:", age);
console.log("Result:", result2);

// 3. Find the Maximum of Two Numbers
let num1 = 25;
let num2 = 40;
let maximum = (num1 > num2) ? num1 : num2;
console.log("3. Maximum of Two Numbers");
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Maximum:", maximum);

// 4. Check if a Number is Positive, Negative, or Zero
let number2 = -5;
let result4 = (number2 > 0)
    ? "Positive"
    : (number2 < 0)
        ? "Negative"
        : "Zero";
console.log("4. Positive, Negative or Zero");
console.log("Number:", number2);
console.log("Result:", result4);

// 5. Check if a Student Passed or Failed
let score = 55;
let result5 = (score >= 40) ? "Passed" : "Failed";
console.log("5. Pass or Fail");
console.log("Score:", score);
console.log("Result:", result5);