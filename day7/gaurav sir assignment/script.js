// Q1. Check if a string is palindrome.
let str = "madam";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
if (str == rev) {
    console.log("Q1: Palindrome");
} else {
    console.log("Q1: Not Palindrome");
}

// Q2. Write factorial(n).
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact = fact * i;
}
console.log("Q2: Factorial =", fact);

// Q3. Check prime number.
let num = 7;
let prime = true;
if (num <= 1) {
    prime = false;
}
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        prime = false;
    }
}
if (prime) {
    console.log("Q3: Prime Number");
} else {
    console.log("Q3: Not Prime Number");
}

// Q4. Print Fibonacci first n terms.
let terms = 5;
let a = 0;
let b = 1;
console.log("Q4: Fibonacci Series");
for (let i = 1; i <= terms; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}

// Q5. Find smallest array element.
let arr1 = [10, 5, 20, 3, 15];
let smallest = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < smallest) {
        smallest = arr1[i];
    }
}
console.log("Q5: Smallest =", smallest);

// Q6. Count digits in a number.
let number = 12345;
let count = 0;
while (number > 0) {
    count++;
    number = parseInt(number / 10);
}
console.log("Q6: Digits =", count);

// Q7. Print star triangle with 5 rows.
console.log("Q7: Star Triangle");
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}

// Q8. Remove duplicate values from an array.
let arr2 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let i = 0; i < arr2.length; i++) {
    if (!unique.includes(arr2[i])) {
        unique.push(arr2[i]);
    }
}
console.log("Q8: Unique Array =", unique);

// Q9. Find average of array.
let arr3 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
}
let average = sum / arr3.length;
console.log("Q9: Average =", average);

// Q10. Count even numbers in array.
let arr4 = [2, 5, 8, 10, 15, 18];
let even = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 == 0) {
        even++;
    }
}
console.log("Q10: Even Numbers =", even);