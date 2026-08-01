// Example: Array Creation & Index Access
// 1. Array Literal (Preferred)
const fruits = ['Apple', 'Banana', 'Cherry'];
// 2. Accessing Elements (0-indexed)
console.log(fruits[0]);                 
console.log(fruits[fruits.length - 1]);
// 3. Modern Array.prototype.at() method
console.log(fruits.at(-1));             

// Example: Stack and Queue Operations with Arrays
const numbers = [10, 20, 30];
// End operations
numbers.push(40);          
const last = numbers.pop();
// Start operations
numbers.unshift(5);         
const first = numbers.shift(); 

// Example: slice() vs splice()
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
// slice: Non-mutating
const sliced = colors.slice(1, 3);
console.log(sliced); 
console.log(colors); 
// splice: Mutating (Remove 1 element at index 1 and insert 'Purple')
const removed = colors.splice(1, 1, 'Purple');
console.log(removed);
console.log(colors); 

// Example: Comparing forEach and map
const nums = [1, 2, 3, 4];
// forEach for side-effects
nums.forEach((n) => console.log(n * 2));
// map to transform into new array
const doubled = nums.map((n) => n * 2);
console.log(doubled);

// Example: Searching & Filtering Arrays
const users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 25 }
];
// filter: All users older than 23
const adults = users.filter(u => u.age > 23);
console.log(adults); 
// find: First user with id 2
const user = users.find(u => u.id === 2);
console.log(user);
// includes: Check value presence
const names = ['Alice', 'Bob'];
console.log(names.includes('Alice')); 

// Example: Calculating Sum and Grouping with reduce()
const cart = [
    { item: 'Book', price: 15 },
    { item: 'Pen', price: 5 },
    { item: 'Bag', price: 50 }
];
// 1. Sum total price
const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
console.log(totalPrice); // 70
// 2. Group items by price category
const grouped = cart.reduce((acc, item) => {
    const key = item.price > 20 ? 'expensive' : 'cheap';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});
console.log(grouped);

// Q8. What are flat(), flatMap(), and Array.from()?
// 1. flat(depth)
const arr1 = [1, 2, [3, 4], [5, 6]];
console.log(arr1.flat());
const arr2 = [1, [2, [3, [4]]]];
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));
// 2. flatMap()
const numbers = [1, 2, 3];
const result = numbers.flatMap(num => [num, num * 2]);
console.log(result);
// 3. Array.from()
const str = "HELLO";
const letters = Array.from(str);
console.log(letters);
// Using Array.from() with a mapping function
const nums = Array.from([1, 2, 3], x => x * 10);
console.log(nums);
// Convert Set to Array
const set = new Set([10, 20, 30]);
console.log(Array.from(set));

// Example: Flattening & Array.from Usage
// 1. Flattening nested array
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2));
// 2. Array.from with map function
const range = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(range);
// 3. Convert Set to unique array
const unique = Array.from(new Set([1, 2, 2, 3]));
console.log(unique);