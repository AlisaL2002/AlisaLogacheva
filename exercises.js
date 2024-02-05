// 3-1. Flattening
// flattening funct takes a (list) and flattens it into a single array using the reduce and concat methods
export const flattening = (list) => {
    return list.reduce((a, b) => a.concat(b), []);
  };
  
  // 3-2. Loop
  export const loop = (value, test, update, body) => {
    for (let current = value; test(current); current = update(current)) {
      body(current);
    }
  };
  
  // 3-3. everyLoop
  // everyLoop funct checks whether all elements in an array pass a test by iterating through the array using a loop
  export const everyLoop = (array, test) => {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  };
  
  // 3-4. everySome
  // everySome funct checks if all elements in array pass the test function, using the Array.prototype.some method using booleans as output/return
  export const everySome = (array, test) => {
    return !array.some(element => !test(element));
  };
  