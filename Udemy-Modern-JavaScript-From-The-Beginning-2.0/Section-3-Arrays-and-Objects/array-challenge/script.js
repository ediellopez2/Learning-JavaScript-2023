// Task 1
// Original Array
const arr = [1, 2, 3, 4, 5];

// Expected Output
// [6, 5, 4, 3, 2, 1, 0];


arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);
console.log(typeof arr);
console.log(arr.toString());
console.log(typeof arr.toString());


// Task 2
// Combine the two arrays.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Create a copy of arr2, then remove the 5 as it is a duplicate value.
let arr2copy = [...arr2];
arr2copy.shift();
console.log(arr2copy);

// Creates a array with two child arrays.
let arr3 = [arr1, arr2];
console.log(arr3);

// Success: Uses the spread operator to create a new array using the values from the two arrays.
let arr4 = [...arr1, ...arr2copy];
console.log(arr4);

// Success: Uses to flat method to remove the child arrays and just keep the values.
let arr5 = [arr1, arr2copy].flat();
console.log(arr5);


// Alternate solutions used slice, splice, and concat.