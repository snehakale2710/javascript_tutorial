// 1. Write a program to check if a job applicant is eligible (age > 18 AND hasDegree === true) using the && operator.
let applicantAge = 22;
let hasDegree = true;
console.log("1.", applicantAge > 18 && hasDegree);

// 2. Write a program to check if a user can access a dashboard (isUsernameCorrect OR isAdmin) using the || operator.
let isUsernameCorrect = false;
let isAdmin = true;
console.log("2.", isUsernameCorrect || isAdmin);

// 3. Write a program to check if a given number is both positive (> 0) AND even (% 2 === 0).
let number = 8;
console.log("3.", number > 0 && number % 2 === 0);

// 4. Write a program to check if a number is divisible by both 3 AND 5.
let num = 30;
console.log("4.", num % 3 === 0 && num % 5 === 0);

// 5. Write a program to check if a student passed both Mathematics AND English exams.
let maths = true;
let english = true;
console.log("5.", maths && english);

// 6. Write a program using the || operator to check if a student passed in at least one subject.
let science = false;
let history = true;
console.log("6.", science || history);

// 7. Write a program that uses the Logical NOT (!) operator to flip a boolean variable from true to false.
let flag = true;
console.log("7.", !flag);

// 8. Write a program to check if a user is NOT logged in (!isLoggedIn).
let isLoggedIn = false;
console.log("8.", !isLoggedIn);

// 9. Write a program to check if a given number lies within the range of 10 to 100 (num > 10 && num < 100).
let value = 55;
console.log("9.", value > 10 && value < 100);

// 10. Write a simple user login validation program checking (username === "admin" || email === "admin@test.com") && password === "12345".
let username = "admin";
let email = "user@test.com";
let password = "12345";

console.log(
    "10.",
    (username === "admin" || email === "admin@test.com") &&
    password === "12345"
);