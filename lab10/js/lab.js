
/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   11.03.2021
 * Lisence public domain
 */

function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var field = document.getElementById("your name");
  var name = field.value;

  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + name;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle);
