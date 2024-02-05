// Creating an array with three quotations 
const quotes = [ 
    "Success consists of going from failure to failure without loss of enthusiasm. -  Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is the sum of small efforts - repeated day in and day out. - Robert Collier"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomIndex]);
//   Using the math function to choose a random quotation