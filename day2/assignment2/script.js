// Q1. Print Numbers 1 to 10
console.log("1. Print Numbers 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2. Print Even Numbers
console.log("\n2. Even Numbers from 1 to 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q3. Count Down
console.log("\n3. Count Down");
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log("Go!");

// Q4. Sum of Numbers
console.log("\n4. Sum of Numbers");
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum =", sum);

// Q5. Multiplication Table of 5
console.log("\n5. Multiplication Table of 5");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Q6. Loop Through an Array
console.log("\n6. Loop Through an Array");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// Q7. Count Characters in a Word
console.log("\n7. Letters of JavaScript");
for (let letter of "JavaScript") {
    console.log(letter);
}

// Q8. Say Hello
console.log("\n8. Say Hello");
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

// Q9. Greet User
console.log("\n9. Greet User");
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Sneha"));

// Q10. Add Two Numbers
console.log("\n10. Add Two Numbers");
function add(a, b) {
    return a + b;
}
console.log("Sum =", add(10, 20));

// Q11. Square a Number
console.log("\n11. Square a Number");
function square(num) {
    return num * num;
}
console.log("Square =", square(4));

// Q12. Check Even or Odd
console.log("\n12. Check Even or Odd");
function isEven(num) {
    return num % 2 === 0;
}
console.log("10 is Even:", isEven(10));
console.log("7 is Even:", isEven(7));

// Q13. Celsius to Fahrenheit
console.log("\n13. Celsius to Fahrenheit");
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
console.log("30°C =", celsiusToFahrenheit(30), "°F");

// Q14. Convert to Arrow Function
console.log("\n14. Arrow Function");
const double = (x) => x * 2;
console.log("Double of 8 =", double(8));

// Q15. Find Larger Number
console.log("\n15. Find Larger Number");
function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log("Larger Number =", findMax(50, 80));