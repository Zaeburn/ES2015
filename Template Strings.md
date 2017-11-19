# Template Strings

```
var firstName = "Elie";

var lastName = "Schoppik";

console.log("Hello " + firstName + " " + lastName); // error prone!

```

```
console.log(`Hello ${firstName} ${lastName}`); // Much nicer!
```

Make sure you use backticks!

Multiline Strings
```
"
Hello
" // does not work!

`
Hello
How
Nice
Is
This!
` // works well!

```