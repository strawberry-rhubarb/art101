/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   11.01.2021
 * Lisence public domain
 */
var bioEl = document.getElementById("output");
var targetEl=document.getElementById("output");
var new1El = document.createElement("button")
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
