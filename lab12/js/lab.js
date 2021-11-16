/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   11.15.2021
 * Lisence public domain
 */
//  Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)

function sortingHatLength(str) {
// counts the letters in str and assigns it to a variable length
// uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  len = str.length;
 // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  mod = len % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3

  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}
// Create an click listener attached to #button
// that gets the value of #input and assigns it to a variable name
// runs sortingHat(name) and stores the result in a variable house
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name=document.getElementById("input").value;
  var house =sortingHatLength(name);
  newText = "<p>The sorting hat has sorted you into " + house + "</p>";
  document.getElementById('output').innerHTML = newText;
})
