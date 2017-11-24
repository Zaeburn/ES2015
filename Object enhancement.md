# Object Enhancement
## Object Shorthand Notation
```
var firstName = "Elie";
var lastName = "Schoppik";

// ES5
var instructor = {
    firstName: firstName,
    lastName: lastName
}
```

```
var firstName = "Elie";
var lastName = "Schoppik";

// ES2015
var instructor = {
    firstName,
    lastName
}
```

## Object methods
```
// ES5
var instructor = {
    sayHello: function(){
        return "Hello!";
    }    
}
``` 

```
// ES 2015
var instructor = {
    sayHello(){
        return "Hello!";
    }
}
```

## Computed Property Names
```

// ES5
var firstName = "Elie";
var instructor = {};
instructor[firstName] = "That's me!";

instructor.Elie; // "That's me!"

```

```
// ES2015
var firstName = "Elie";
var instructor = {
    [firstName]: "That's me"
}

instructor.Elie; // "That's me!"
```
