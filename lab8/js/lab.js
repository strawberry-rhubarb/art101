/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   10.27.2021
 * Lisence public domain
 */

function isEven(x){
  return(x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [69, 420, 8, 1111, 333, 444, 666, 16, 4]
console.log("My array", array);

var result = array.map(isEven);
console.log("test of eveness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

console.log("squareroot of array:", result);
