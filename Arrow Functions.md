# Arrow Functions
```
// ES5
var add = function(a,b){
    return a+b;
}
```
## Replace the keyword 'function' with =>
```
var add = (a,b) => {
    return a+b;
}
```
Just the start...


## One-line arrow functions
- You can put arrow functions on one line.
- But you must omit the return keyword as well as curly braces

We can go from:
```
var add = (a,b) => {
    return a+b;
}

```
TO:
```
var add = (a,b) => a+b;
```

## Refactoring with arrow functions
We can go from 
```
// ES5
[1,2,3].map(function(value){
    return value * 2;
}); // [2,4,6]

```
To:
```
[1,2,3].map( value => value * 2;);
// [2,4,6]
```

## Let's do it again!
We can go from
```
function doubleAndFilter(arr){
    return arr.map(function(value){
        return value * 2;
    }).filter(function(value){
        return value % 3 === 0;
    })
};

doubleAndFilter([5,10,15,20]); // [30]
```
To:
```
doubleAndFilter = (arr) => arr.map(value => value *2).filter(value => value % 3 ===0;);
```
**Notice that if we only have one parameter, we do not need parenthesis around it with arrow functions!**


## So...what's the catch?
- Arrow functions are not exactly the same as regular functions!
- Arrow functions do not get their own 'this' keyword
- Inside of an arrow function, the keyword this has its original meaning from the enclosing context.
- The fact that arrow functions do not have their own this keyword can be quite helpful - you just need to understand when you might NOT want that!

## A familiar situation...
```
var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}
instructor.sayHi(); // "Hello undefined"
```

```
var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Hello ${this.firstName}`);
        }.bind(this), 1000);
    }
}
instructor.sayHi(); // "Hello Elie"
```
## Arrow functions as an alternative
```
var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() => {
            console.log(`Hello ${this.firstName}`);
        }, 1000);
    }
}
instructor.sayHi(); // "Hello Elie"
```
**But why does this work?**  
Arrow functions do not have their own keyword this.  The keyword this refers to its enclosing context (the instructor object).

## One quick gotcha
We used both the function keyword and an arrow function - why?
```
var instructor = {
    firstName: "Elie",
    // why can't we use an arrow function here?
    sayHi: function(){
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello Elie"
```
If we use an arrow function, the sayHi function will not have its own keyword this - and the keyword this will not refer to the instructor object anymore!

```
var instructor = {
    firstName: "Elie",
    sayHi: () => {
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}
instructor.sayHi();  // Hello undefined
```
## Arrow Functions and `arguments`
arrow functions do not get their own keyword arguments
```
var add = (a,b) => {
    return arguments;
}

add(2,4); // ReferenceError: arguments is not defined

```
## One more note about `arguments`
An arguments keyword can be accessed if the arrow function is inside of another function (it will be the outer functions arguments)

```
function outer() {
    return innerFunction = () => {
        return arguments;
    }
}

outer(1)(3); // only prints out 1
```
If you REALLY need the arguments to an arrow function, use the rest operator - we'll see that very soon!

## When NOT to use Arrow Functions

Arrow functions should NEVER be used as methods in objects since we will get the incorrect value of the keyword this. ES2015 provides a better alternative - we'll see it soon!

```
var instructor = {
    firstName: "Elie",
    sayHi: () => `Hello ${this.firstName}`;
}

instructor.sayHi(); // "Hello undefined"
```