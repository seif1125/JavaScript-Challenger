 //Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300



function addUp(num) {
    let numberArray = []; // prepare an array to make our number into step sequence array
    let initialValue = 0;// set our initial value for summation
    for (var i = 1; i <= num; i++) {
      numberArray.push(i); //numbers will be add as [5,4,3,2]etc..
    }
    return numberArray.reduce(   //function reduce is a function applied on array which make accumulative function
      (accumulator, currentvalue) => accumulator + currentvalue,
      initialValue
    );
  }
  module.exports=addUp;