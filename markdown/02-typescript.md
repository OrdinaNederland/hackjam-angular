## TypeScript
*Angular is built on TypeScript!*

![logo](images/typescript-logo.png)


## What is TypeScript?

![logo](images/typescript-es6-es5.png)

Note:
- Notes
  - TypeScript is not a completely new language, based on ES5/6
  - If we write ES5/6 code, it’s perfectly valid and compilable TypeScript code. 
  - TypeScript komt sterk overeen met Java/C#
- [Rangle blog: typescript met Angular 1](http://blog.rangle.io/write-angular-2-style-code-now-typescript-decorators-components-and-flux-for-angular-1-x-applications)


## What do we get with TypeScript?

There are five big improvements that TypeScript bring over ES5:
- types
- classes
- annotations
- imports
- language utilities (e.g. destructuring)


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
