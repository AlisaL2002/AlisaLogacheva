// Creating an array with three quotations 
const quotes = [ 
    "Success consists of going from failure to failure without loss of enthusiasm. -  Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is the sum of small efforts - repeated day in and day out. - Robert Collier"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomIndex]);
//   Using the math function to choose a random quotation

// Code for exercises.js file
import { flattening, loop, everyLoop, everySome } from './exercises.js';

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays)); // Should output in terminal → [1, 2, 3, 4, 5, 6]

loop(3, n => n > 0, n => n - 1, console.log);
// Should output in terminal:
// → 3
// → 2
// → 1

console.log(everyLoop([1, 3, 5], n => n < 10)); // → true
console.log(everyLoop([2, 4, 16], n => n < 10)); // → false
console.log(everyLoop([], n => n < 10)); // → true