## Rest operator

```
function printRest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1,2,3,4,5); 

// 1
// 2
// [3,4,5]
```

- The rest operator always returns an **array**   
- Is called the rest operator "only" when it is a parameter to a function
- Is accessed without the ... in a function
- A better alternative to using the arguments array-like- object


e.g.
```
// ES5
function sumArguments(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

```

```
// A little fancier ES5
function sumArguments(){
    var argumentsArray = [].slice.call(arguments);
    return argumentsArray.reduce(function(accumulator,nextValue){
        return accumulator + nextValue;
    });
}
```
```
// ES2015
var sumArguments = (...args) => args.reduce((acc, next) => acc + next);
```

