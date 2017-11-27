# Class

- A new reserved keyword provided by ES2015
- The class keyword creates a constant - can not be redeclared
- The class keyword is an abstraction of constructor functions and prototypes. JavaScript does not have built in support for object oriented programming
- The class keyword does not hoist
- Still use `new` keyword to create objects

### ES5 Object Oriented
```
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Student('Elie', 'Schoppik');
```
- create a constructor function
- use the new keyword to create objects

### ES2015 Object Oriented
```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var elie = new Student('Elie', 'Schoppik');
```
- use the class keyword instead of creating a function
- inside, use a special method constructor which is run when new is used
- use the new keyword to create objects

### ES5 Instance Methods
```
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}
```
Shared methods and properties are placed directly on the function's prototype property

### ES2015 Instance Methods
```
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}
```
- placed inside of class keyword
- no 'function' keyword - similar to object shorthand notation
- under the hood it is placing methods on the prototype object

### ES5 Class Methods
```
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Student.isStudent = function(obj){
    return obj.constructor === Student;
}
```
Class methods are placed directly on the constructor function.

### ES2015 Class Methods
```
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    static isStudent(obj) {
        return obj.constructor === Student;
    }

}
```
Class methods are created using the static keyword
