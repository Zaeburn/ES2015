# Promises

- A one time guaranteed return of some future value
- When that value is figured out - the promise is resolved/fulfilled or rejected
- Friendly way to refactor callback code
- Libraries have implemented Promises for a while, ES2015 is a little late to the game

### Story time

- You're hungry - so you go to McDonalds
- You place your order and get a ticket (a promise)
- After some time, you either get your food and the promise is resolved or you do not get your food and the promise is rejected
- If you want another order - you need a new Promise!

### Where have you seen promises before?
- jQuery implemented its own version of a promise called a deferred. jQuery version 3 now supports native promises.
- Many JavaScript libraries and frameworks (Node, Angular) use popular promise libraries like q and bluebird.

### We can now create our own promises!
- Created using the new keyword
- Every promise constructor accepts a callback function which contains two parameters, resolve and reject
- You can call these parameters whatever you like, resolve and reject are most common
- These parameters are both functions to be run if the promise is resolved or rejected

### A simple example
```
function displayRandomTime(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(Math.random() > 0.5){
                resolve('Yes!');
            } else {
                reject('No!');
            }
        }, 1000);
    });
}
```
The returned value from a promise will always contain a .then and .catch method which are functions to be executed when the promise is resolved or rejected
```
displayRandomTime()
.then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log(error);
});
```

### Returning promises
Since a promise always returns something that has a .then (thenable) - we can chain promises together and return values from one promise to another!

```
var years = [];
$.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`)
.then(function(movie){
    years.push(movie.Year);
    return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb'); 
})
.then(function(movie){
    years.push(movie.Year);
    console.log(years);
});

console.log('ALL DONE');

// "ALL DONE!"
// ["1997", "2001]
```

# Promise.all
- Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected (fail fast).
- If all of the passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in promises, in the same order as the promises passed in.
- You may have seen something like this when $.when in jQuery or Q
- The promises don't resolve sequentially, but Promise.all waits for them

Let's make a function that returns a promise
```
function getMovie(title){
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

```
```
Promise.all([titanicPromise, shrekPromise, braveheartPromise])
.then(function(movies){
    //return movies.map(function(value){
    return movies.forEach(function(value){
        console.log(value.Year);
    });
})
```