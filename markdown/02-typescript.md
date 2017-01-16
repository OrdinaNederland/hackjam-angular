## TypeScript 101
*Angular is built on TypeScript!*

![logo](images/typescript-logo.png)


## What is TypeScript?

![logo](images/typescript-es6-es5.png)

Note:
- TypeScript is not new, it's based on ES5/6
- All ES 5/6 code is valid and compilable TypeScript code. 
- TypeScript is inspired by Java / C#


## What do we get with TypeScript?

There are five big improvements that TypeScript bring over ES5:
- types
- classes
- annotations
- imports
- language utilities

Note:
- Language utilities include
  - Fat arrows (lambda's)
  - Template strings (multi-line / variable expansion)


## Types

The new TypeScript syntax is a natural evolution from ES5:
- variables optionally provide the variable type along with its name
- functions can use types for arguments and return values

```
var name: string;

function greetText(name: string): string {
   return "Hello " + name;
}
```


### Built-in types

- String
- Number
- Boolean
- Arrays, using 
  - Array<string>
  - string[]
- Enums
- Any
- Void


## Classes,  interfaces and inheritance 
```
interface IBookListComponent {
}

class BookListComponent implements IBookListComponent {
          books:  String[];

          constructor() {
              this.books =[‘book1’, ‘book2’]
     }  
}

```


## Arrow functions
- ES5-like example
```
var data = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach(function(line) { console.log(line); });
```

- Typescript example
```
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach( (line) => console.log(line) );
```

---

- Fat arrows share `this` with surrounding code
```
var nate = {
   name: "Nate",
   guitars: ["Gibson", "Martin", "Taylor"],
   printGuitars: function() {
       this.guitars.forEach( (g) => {
         console.log(this.name + " plays a " + g);
     });
   }
};
```


## Template strings

The two great features of template strings are
- Variables within strings (without being forced to concatenate with +)
- Multi-line strings
                   
```
// Variables in strings
var firstName = "Nate";
var lastName = "Murray";
var greeting = `Hello ${firstName} ${lastName}`;
```

---

```
var template = `<div>
  <h1>Hello</h1>
  <p>This is a great website</p>
</div>` 
```

