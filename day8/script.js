// Q1. Merge two arrays and return unique elements
function mergeUnique(arr1, arr2) {
    let merged = [];
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }
    for (let i = 0; i < merged.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (merged[i] === result[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(merged[i]);
        }
    }
    return result;
}
console.log("Q1:", mergeUnique([1, 2, 3], [2, 3, 4, 5]));

// Q2. Find the largest word in a sentence
function findLargestWord(sentence) {
    let words = sentence.split(" ");
    let largest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > largest.length) {
            largest = words[i];
        }
    }
    return largest;
}
console.log("Q2:", findLargestWord("JavaScript is a powerful programming language"));

// Q3. Count vowels and consonants
function countVowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch >= 'a' && ch <= 'z') {
            if (
                ch === 'a' ||
                ch === 'e' ||
                ch === 'i' ||
                ch === 'o' ||
                ch === 'u'
            ) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}
countVowelsAndConsonants("Hello World");

// Q4. Sum of Fibonacci series
function fibonacciSum(n) {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += a;
        let next = a + b;
        a = b;
        b = next;
    }
    return sum;
}
console.log("Q4:", fibonacciSum(7));

// Q5. Search an element in array
function searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return "Element found at index " + i;
        }
    }
    return "Element not found";
}
console.log("Q5:", searchElement([10, 20, 30, 40], 30));

// Q6. Count positive and negative numbers
function countPositiveNegative(arr) {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        }
    }
    console.log("Positive:", positive);
    console.log("Negative:", negative);
}
countPositiveNegative([4, -2, 6, -5, 0, 9, -1]);

// Q7. Sort array in ascending order without sort()
function sortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("Q7:", sortAscending([8, 3, 6, 2, 9, 1]));

// Q8. Print multiplication tables
function multiplicationTables(start, end) {
    for (let i = start; i <= end; i++) {
        console.log("Table of " + i);
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
        console.log("----------------");
    }
}
multiplicationTables(2, 4);

// Q9. Find missing number from 1 to n
function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return total - sum;
}
console.log("Q9:", findMissingNumber([1, 2, 3, 5, 6]));

// Q10. Login using conditions
function login(username, password) {
    let correctUsername = "admin";
    let correctPassword = "12345";
    if (username === correctUsername && password === correctPassword) {
        return "Login Successful";
    } else if (username !== correctUsername) {
        return "Invalid Username";
    } else {
        return "Invalid Password";
    }
}
console.log("Q10:", login("admin", "12345"));
console.log("Q10:", login("admin", "11111"));
console.log("Q10:", login("user", "12345"));