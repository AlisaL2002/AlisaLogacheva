// 3-1. Flattening
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
  export const everyLoop = (array, test) => {
    for (let element of array) {
      if (!test(element)) return false;
    }
    return true;
  };
  
  // 3-4. everySome
  export const everySome = (array, test) => {
    return !array.some(element => !test(element));
  };
  