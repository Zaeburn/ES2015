# let

```

let anotherInstructor = "Tim";

anotherInstructor = "Elie"; // no problems here!

let anotherInstructor = "Tim"; // SyntaxError

```

** Can reassign, can not redeclare **  


## Scope with let

Before let there were two kinds of scopes.
- global scope, variables defind in global could be use anywhere. 
- function scope, variables defind in function using the var keyword could only be used inside the function.

What's block scope in JavaScript?
- first, key words in Javascript which create blocks for us.
    `if`, `for`, `while`, `do`, `try`, `catch` 

- blocks create scope!
```
var instructor = "Elie";

if(instructor === "Elie"){
    let funFact = "Plays the cello";
}

funFact; // ReferenceError!

```

## Hoisting with let

```
function helloInstructor(){
    return elie;
    var elie = "ME!";
}

helloInstructor(); // undefined
```

```
function helloSecondInstructor(){
    return colt;
    let colt = "HIM!";
}

helloSecondInstructor(); // ReferenceError
```
let does hoist, but we can not access the value - it is in a TDZ (Temporal Dead Zone)

## Use Cases for let
```
for(var i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000);
}

// 5 (five times)
```

```
for(var i = 0; i < 5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 1000);
    })(i);
}
// 0
// 1
// 2
// 3
// 4

```
use immiediate invoke function, so that each set time out would have its own value. 

**We can use the keyword tomake things much easier if we replace var with let**  
```
for(let i = 0; i<5; i++){
    setTimeout(function(i){
        console.log(i);
    }, 1000);
}

```
**Let allows us to declare variables that are limited in scope to the block in which it is used and a new variable is created for each iteration in the loop. This is unlike the var keyword which defines a variable globality**

## To recap
- `let` keyword will hoist to the top of a block.
- However referencing that variable in the block before the variable declaration results in a reference area. The variable is in a temporal dead zone from the start of the block until the declaration is processed.
- We also cannot redefine a variable using the `let` keyword