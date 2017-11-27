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


# Inheritance
Passing along methods and properties from one class to another

### ES5 Inheritance
```
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

```

```
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```
- Set the prototype property of a constructor to be an object created from another prototype property
- Reset the constructor property on a constructor function

### ES2015 Inheritance
Use the extends keyword
```
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {

}
```

# Super
### ES5 Refactoring Constructors
```
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
```
Notice the duplication in the Student constructor function!

### Use Apply
```
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    Person.apply(this, arguments);
}
```
Use call or apply in a constructor function - apply is handy when there are many arguments


### ES2015  super
```
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

```
```
class Student extends Person {
    constructor(firstName, lastName){
        // you must use super here!
        super(firstName, lastName);
    }
}
```
Super can only be used if a method by the same name is implemented in the parent class

# Recap
- Quickly create constructor functions and prototype methods using the class keyword
- Add class methods using the static keyword
- Implement inheritance using the extends and super keywords
- ES2015 class syntax is an abstraction of using functions and objects!