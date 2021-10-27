/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   10.25.2021
 * Lisence public domain
 */

// sortUserName - a function that takes user input and sorts the letters of their sortUserName
function sortUserName(){
  var userName = window.prompt("Hello! Please tell me your name so I can fix it :)");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);
  //join arrray back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}
//Output
document.writeln("I fixed your name! ",
  sortUserName(),"</br>");
