/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   11.01.2021
 * Lisence public domain
 */

//  Use getElementById() to find your output <div> and assign it to a variable outputEl
// Create a new element with document.createElement("p") and assign it to a variable new1El
// Change the html attribute of new1El to say something new.
// Create another new element and assign it to a variable new2El
// Change the html attribute of new2El to say something else.
// Append both new elements one at a time using appendChild() to your output <div>
// Change the css attributes of at least two elements of your page

var outputEl = document.getElementById("output");
var new1El = document.createElement("button");
new1El.id = "button";
new1El.innerHTML = "Press me!";
document.body.appendChild(new1El);

var targetEl=document.getElementById("output");
var new2El= document.createElement("button");
new2El.id = "button";
new2El.innerHTML = "I'm confused!";
document.body.appendChild(new2El);

document.getElementById("content").
style.color = "green";

document.getElementById("output").
style.color = "blue";
