// 1. Concatenate two strings using the + operator
let firstName = "Sneha";
let lastName = "Patil";
let fullName = firstName + " " + lastName;
console.log("1. String Concatenation");
console.log("Full Name:", fullName);

// 2. Combine a string and a number using the + operator
let message = "Age: ";
let age = 21;
let result = message + age;
console.log("2. String + Number");
console.log(result);

// 3. Merge two arrays using the Spread (...) operator
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let mergedArray = [...array1, ...array2];
console.log("3. Spread Operator");
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Merged Array:", mergedArray);