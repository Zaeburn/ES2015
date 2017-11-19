## For...of loop

```
var arr = [1,2,3,4,5];

for(let val of arr){
    console.log(val);
}

// 1
// 2
// 3
// 4
// 5
```

- Can't access an index
- Can only be used on data structures with a Symbol.iterator method implemented (no objects!)
- method with Symbol.iterator e.g. (Array，Map，Set，String，TypedArray，arguments)

```
// array
let array = [10,20,30];
for(let val of array){
    console.log(val);
}
// 10
// 20
// 30

// str
let str = "boo";
for(let val of str){
    console.log(val);
}
// "b"
// "o"
// "o"

// map
let map = new Map([["a", 1], ["b", 2], ["c", 3]]);
for(let entry of map){
    console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for(let [key,value] of map){
    console.log(value);
}
// 1
// 2
// 3

// set
let set = new Set([1,1,2,2,3,3]);
for(let value of set){
    console.log(value);
}
// 1
// 2
// 3

//DOM
let divs = document.querySelectorAll("div");
for(let div of divs){
    div.className = "red";
}

// Generator
function* fibonacci(){
    let [prev,curr] = [0,1];
    for(;;){
        [prev,curr] = [curr,curr+prev];
        yield curr;
    }
}

for(let n of fibonacci()){
    if(n>1000) break;
    console.log(n);
}
```