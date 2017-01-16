## Angular 101 - Part 1

- Components
- Forms
- Data-binding 


## Components (1) - End result
*You'll build a working web application with Angular!*

![logo](images/part1/result.png)


## Components (2) - Application structure
*All Angular apps are structured!*

![logo](images/part1/components.png)

Note:
- Relate components to the end-result!


## Components (3) - Tree based
*An Angular app consist of a tree of components!*
- Each component adds logic / behaviour to DOM elements

![logo](images/part1/component-tree.png)
 
Note:
- Component tree has the same structure as the html-structure !!!
- Index.html is the parent template of AppComponent ect…
- AppComponent is the parent of MenuComponent and BookListComponent


## Components (4) - Syntax
*All components are written in TypeScript!*

- Reference this component in HTML with the <book-list>-tag. 
- You export the Component class so that you can import and use it in the rest of your application.

```
import {Component} from 'angular/core';

@Component({
  moduleId: module.id,
  selector: 'book-list',
  templateUrl: 'booklist.template.html'
})

export class BookListComponent {
  books: string[];
  
  constructor()  {
    this.books =['book1', 'book2'];
  }  
}
```

Note:

How to convert this class in a Component:
- You import the Typescript libraries from Angular 2
- Decorate a class to be a Component with the @Component decorator
- templateUrl == the component's template 

