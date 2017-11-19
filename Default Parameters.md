## Default Parameters

```
function add(a, b){
    return a+b;
}

add(); // NaN because a is undefined and b is undefined
```
ES5 solution

```
function add(a, b){
    if(a === undefined) {
        a = 2;
    }
    if(b === undefined) {
        b = 3;
    }
    return a+b;
    
}
add(); // 5
```
ES2015 way

```
let add = (a=2, b=3) => a+b;
add() // 5
```
