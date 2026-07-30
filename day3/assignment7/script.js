// 1. Use the typeof operator
let number = 100;
let text = "Hello";
let isStudent = true;
let value = null;
let data;
console.log("1. typeof Operator");
console.log("Number:", typeof number);
console.log("String:", typeof text);
console.log("Boolean:", typeof isStudent);
console.log("Null:", typeof value);      // object
console.log("Undefined:", typeof data);  // undefined

// 2. Use instanceof to check if an array is an instance of Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("2. instanceof Operator");
console.log("Is fruits an Array?", fruits instanceof Array);

// 3. Demonstrate the comma operator
let result = (a = 10, b = 20, a + b);
console.log("3. Comma Operator");
console.log("Value of a:", a);
console.log("Value of b:", b);
console.log("Result:", result);

// 4. Use the delete operator
let student = {
    name: "Sneha",
    age: 21,
    course: "B.Sc ECS"
};
console.log("4. Delete Operator");
console.log("Before Delete:", student);
delete student.age;
console.log("After Delete:", student);

// 5. Use the in operator
let employee = {
    id: 101,
    name: "Rahul",
    department: "IT"
};
console.log("5. in Operator");
console.log("'name' in employee:", "name" in employee);
console.log("'salary' in employee:", "salary" in employee);