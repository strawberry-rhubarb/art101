/*
 * Author:    Amelia McKee ,agmckee@ucsc.edu>
 * Created:   11.22.2021
 * Lisence public domain
 */
 //given a number and an object that looks like this:
 //{3:"fizz", 5:"buzz", 7:"boom"}
 //loops over the numbers and outputs the number and the matching text
 //for Factors
 function getfactorObj(maxNums, factorObj){
   //iterate all numbers
   for (var num=0; num<maxNums; num++){
     //reset output string
     var outputStr="";
     //iterate over factors from html
     for (var factor in factorObj){
       //check to see if number is a multiple of factors
       if(num % factor == 0){
         //if yes then add text to output string
         outputStr +=factorObj[factor];
       }
     }
     //now that there are words in outputStr format like this "- FizzBuzz!"
     if(outputStr){
       outputStr = " - " + outputStr + "!";
     }
     outputToPage(num.toString() + outputStr)
   }
 }
 function reprtError(str){
   outputEl.innerHTML = "<div class='error'>" + str +"</div>";
 }
 document.getElementById("submit").addEventListener("click", function(){
   var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
      reportError("You must provide a maximum");
      return;
  }
  var factorObj = FizzBuzzBoom();
  console.log("factorObj:", FizzBuzzBoom);
  if (Object.keys(factorObj).length == 0) {
      reportError("You must provide at least one factor and text");
      return;
  }
  // clear error if there is one
  output.innerHTML = "";
  fizzBuzzBoom(max, factorObj);
  outputEl.classList.add("cols");
  })
