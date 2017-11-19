# const

```
var firstInstructor = "Colt";

firstInstructor = "Elie"; // no problem here
```

```
const anotherInstructor = "Tim";

anotherInstructor = "Elie"; // TypeError

const anotherInstructor = "Elie"; // SyntaxError
```
**Can NEVER redeclare**

## Gotcha with const  
```
const numbers = [1,2,3,4];

numbers.push(10); // 5

numbers; // [1,2,3,4,5] 

numbers = "no!"; // TypeError
```
**Can mutate if it is an object, but not declare again**

