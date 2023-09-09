

// Challenge #1
// ==============================================================
// Technique #1: Function Declaration
function getCelsius(faren) {
    console.log("Using function declaration.");
    return Math.round((faren - 32) * 5 / 9);
}

console.log(getCelsius(32));


// Technique #2: Function Expression
const getCelsius1 = function (faren1) {
    console.log("Using function expression.");
    return Math.round((faren1 - 32) * 5 / 9);
}

console.log(getCelsius1(32));

// Technique #2: Arrow Function
const getCelsius2 = (faren2) => {
    console.log("Using arrow function.");
    return Math.round((faren2 - 32) * 5 / 9);
}
console.log(getCelsius2(32));


// Challenge #2
// ==============================================================
const minMax = (argArr) => {

    // Use the Spread `...` operator to spread the values of an array into separate arguments.
    let minValue = Math.min(...argArr);
    let maxValue = Math.max(...argArr);

    return {min: minValue, max:maxValue};
}

const numberArray = [-56,1,3,5,7,9,11,111]; 

console.log(minMax(numberArray));


// Challenge #3
// ==============================================================

// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and 
// width of a rectangle outputs it to the console in a message as soon as the page loads.

(function (length, width) {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(6,7);