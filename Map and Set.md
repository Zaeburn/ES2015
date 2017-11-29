# Maps

- Also called "hash maps" in other languages
- Until ES2015 - objects were replacements for maps
- Similar to objects, except the keys can be ANY data type!
- Created using the new keyword

```
var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
firstMap.size(); // 2
```

Keys can be any type!
```
var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a:1});
```

### Extracting Values
```
firstMap.get(1); // 'Elie'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}
```
We can easily iterate over the map!
```
firstMap.forEach(v => console.log(v));

// Elie
// a boolean
// [1,2,3,4,5]
// {a:1}
```
### Iterating over a map
maps implement a Symbol.iterator which means we can use a for...of loop!
```
firstMap.values(); // MapIterator of values
firstMap.keys(); // MapIterator of keys
```

### Accessing keys and values in a map
we can access everything with .entries() and destructuring!
```
var m = new Map;
m.set(1, 'Elie');
m.set(2, 'Colt');
m.set(3, 'Tim');

for(let [key,value] of m.entries()){
    console.log(key, value);
}

// 1 "Elie"
// 2 "Colt"
// 3 "Tim"
```
### Why use maps?
- Finding the size is easy  - no more loops or Object.keys()
- The keys can be any data type!
- You can accidentally overwrite keys on the Object.prototype in an object you make - maps do not have that issue
- Iterating over keys and values in a map is quite easy as well

### When to use a map
- If you need to look up keys dynamically (they are not hard coded strings)
- If you need keys that are not strings!
- If you are frequently adding and removing key/value pairs
- Are key-value pairs frequently added or removed?
- If you are operating on multiple keys at a time

# WeakMap
- Similar to a map, but all keys MUST be objects
- Values in a WeakMap can be cleared from memory if there is no reference to them
- More performant than maps, but can not be iterated over

# Sets
- All values in a set are unique
- Any type of value can exist in a set
- Created using the new keyword
- Exist in quite a few other languages, ES2015 finally brings them to JavaScript

### Syntax
```
var s = new Set;

// can also be created from an array
var s2 = new Set([3,1,4,1,2,1,5]); // {3,1,4,2,5}


s.add(10); // {10}
s.add(20); // {20, 10}
s.add(10); // {20, 10}

s.size; // 2

s.has(10); // true

s.delete(20); // true

s.size; // 1

s2[Symbol.iterator]; // function(){}...
// we can use a for...of loop!
```

### WeakSet
- Similar to a set, but all values MUST be objects
- Values in a WeakSet can be cleared from memory if there is no reference to them
- More performant than sets, but can not be iterated over