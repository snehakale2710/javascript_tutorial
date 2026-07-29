// 1. Write a program to compare two numbers using abstract equality (==) and print the boolean output.
let num1 = 10;
let num2 = "10";
console.log("1.", num1 == num2);

// 2. Write a program to compare two variables (e.g., a number and a string representation of that number) using strict equality (===) and print the result.
let num3 = 20;
let str = "20";
console.log("2.", num3 === str);

// 3. Write a program to check if two values are not equal using loose inequality (!=).
let a = 15;
let b = "20";
console.log("3.", a != b);

// 4. Write a program to check if two values are strictly not equal using strict inequality (!==).
let x = 15;
let y = "15";
console.log("4.", x !== y);

// 5. Write a program to check which of two numbers is greater using the (>) operator.
let n1 = 30;
let n2 = 25;
console.log("5.", n1 > n2);

// 6. Write a program to check which of two numbers is smaller using the (<) operator.
let n3 = 18;
let n4 = 22;
console.log("6.", n3 < n4);

// 7. Write a program to check whether a student has passed an exam (marks >= 35).
let marks = 40;
console.log("7.", marks >= 35);

// 8. Write a program to check whether a person is eligible to vote (age >= 18).
let age = 19;
console.log("8.", age >= 18);

// 9. Compare two string variables using === to see if they match exactly.
let s1 = "JavaScript";
let s2 = "JavaScript";
console.log("9.", s1 === s2);

// 10. Write a program that takes two numbers and logs the output of every comparison operator between them.
let p = 15;
let q = 20;

console.log("10. ==", p == q);
console.log("10. ===", p === q);
console.log("10. !=", p != q);
console.log("10. !==", p !== q);
console.log("10. >", p > q);
console.log("10. <", p < q);
console.log("10. >=", p >= q);
console.log("10. <=", p <= q);