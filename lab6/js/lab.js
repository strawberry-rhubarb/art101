/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   10.20.2021
 * Lisence public domain
 */

 //Define Varriables
 var myTransport = ["walking", "biking", "bussing", "carpool"];
 var myMainRide = {};
  myMainRide.name = "ebike";
  myMainRide.color = "white";
  myMainRide.size = "medium";
  myMainRide.model = "pace 500 step through";
  myMainRide.make = "aventon";

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
