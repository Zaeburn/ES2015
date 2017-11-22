/*******  Coding Exercise - Arrow Functions Exercises *******/

/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/
let tripleAndFilter = (arr) => arr.map(value => value * 3).filter(value => value % 5 === 0);

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/
let doubleOddNumbers = (arr) => arr.filter(val => val % 2 !== 0).map(val => val * 2);

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/
let mapFilterAndReduce = (arr) => arr.map(val => val.firstName)
    .filter(val => val.length < 5)
    .reduce((acc, next) => {
        acc[next] = next.length;
        return acc;
    }, {});


/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/
let createStudentObj = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName
    }
}
/* 5 - Given the following code: 

Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
    
    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(() => {
        console.log('Hello ' + this.firstName)
      },1000)
    }
  }
  
/*******  Coding Exercise - Rest and Spread Exercises  *******/
/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(){
  return Math.min(...arguments);
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
  placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
  placeInMiddle([1],[3,4,5]) // [3,4,5,1]
  placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
  placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
  middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, ...vals);
  return arr; 
}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

  joinArrays([1],[2],[3]) // [1,2,3]
  joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
  joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
  joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays(...args){
  return args.reduce((acc, next) => acc.concat(next), []);
}

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
  sumEvenArgs(1,2,3,4) // 6
  sumEvenArgs(1,2,6) // 8
  sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...args){
  return args.reduce((acc, next) => next % 2 === 0 ? acc+=next : acc, 0);
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

  function personSubtract(a,b,c){
      return this.firstName + " subtracts " + (a-b-c);
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var flipFn = flip(personSubtract, person);
  flipFn(3,2,1) // "Elie subtracts -4"
  
  var flipFn2 = flip(personSubtract, person, 5,6);
  flipFn(7,8). // "Elie subtracts -4"

  flip(subtractFourNumbers,this,1)(2,3,4) // -2
  flip(subtractFourNumbers,this,1,2)(3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4) // -2
  flip(subtractFourNumbers,this,1,2,3,4)() // -2
  flip(subtractFourNumbers,this)(1,2,3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
  flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
  flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    let allArgs = outerArgs.concat(innerArgs).slice(0,fn.length);
    // debugger;
    return fn.apply(thisArg, allArgs.reverse());
  }
}

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

  function firstNameFavoriteColor(favoriteColor){
      return this.firstName + "'s favorite color is " + favoriteColor
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var bindFn = bind(firstNameFavoriteColor, person);
  bindFn('green') // "Elie's favorite color is green"
  
  var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
  bindFn2('green') // "Elie's favorite color is blue" 
  
  function addFourNumbers(a,b,c,d){
      return a+b+c+d;
  }

  bind(addFourNumbers,this,1)(2,3,4) // 10
  bind(addFourNumbers,this,1,2)(3,4) // 10
  bind(addFourNumbers,this,1,2,3)(4) // 10
  bind(addFourNumbers,this,1,2,3,4)() // 10
  bind(addFourNumbers,this)(1,2,3,4) // 10
  bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/
// my solution
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs) {
    var allArgs = outerArgs.concat(innerArgs);//.slice(0, fn.length);
    // debugger;
    return fn.apply(thisArg, allArgs);
  }
}

// offical solution
// rest operator
function bind(fn, thisArg, ...outerArgs){
// rest operator  
  return function(...innerArgs) {
// spread operator
    return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
  }
}