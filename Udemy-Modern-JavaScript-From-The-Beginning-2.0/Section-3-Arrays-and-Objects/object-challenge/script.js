
// Step 1
let library = [];

let obj1 = new Object();
let obj2 = new Object();
let obj3 = new Object();

library.push(obj1);
library.push(obj2);
library.push(obj3);

obj1.title = "Can't Hurt Me: Master Your Mind and Defy the Odds";
obj1.author = "David Goggins";
obj1.status = { own: true, reading: false, read: false}

obj2.title = "Never Finished: Unshackle Your Mind and Win the War Within";
obj2.author = "David Goggins";
obj2.status = { own: true, reading: false, read: false}

obj3.title = "Extreme Ownership: How U.S. Navy SEALs Lead and Win";
obj3.author = "Jocko Willink";
obj3.status = { own: true, reading: false, read: false}

// Step 2
obj1.status.read = "true";
obj2.status.read = "true";
obj3.status.read = "true";

console.log(library);

// Step 3 - Destructure the title from the first book and rename the variable to firstBook.
const {title: firstBook} = library[0];
console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);