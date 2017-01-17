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

- Reference this component in HTML with the `<book-list>` - tag. 
- Exported classes can be imported and used elsewhere in your application.

```
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'book-list',
  templateUrl: 'booklist.template.html'
})

export class BookListComponent implements OnInit {
  books: string[];
  
  constructor()  {
    // empty constructor
  }

  public ngOnInit() {
    this.books =['book1', 'book2'];
  }
    
}
```

Note:
How to convert this class in a Component:
- Decorate a class to be a Component with the @Component decorator
- Export the component to make it publicly available
- Do *NOT* use constructor, but *ngOnInit()* for initialization  
- templateUrl == the component's template
 

## Modules (1/2)
*Angular applications are composed of modules*

![modules](images/part1/module.png)

Note:
- Modules export classes, function, values — that other modules import.


## Modules (2/2)

```
// Entry point of our application
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './services/app.service';

@NgModule({
  imports: [ BrowserModule, FormsModule
  ], // Import (built-in) modules
  declarations: [
    AppComponent
    ], // Declare the components used by this module
  providers: [
    AppService
  ],
  bootstrap: [AppComponent] // Main component you need to bootstrap
})
export class AppModule {
}
```


## Data binding (1/4)
- The mechanism used to ensure the link between 
  - what a user sees on the screen (view / template)
  - and the data value in the components. 

![data-binding](images/part1/data-binding.png)


## Data binding (2/4)

![data-binding](images/part1/data-binding-2.png)

```
<div>{{book.title}}</div> 

<input value=“text” [disabled]=“isDisabled”></input> 

<div (click)="selectBook($event)></div>

<input [(ngModel)]=“searchTermBook" >
```

Note:
1. To render a value in the view
2. To resolve and bind a variable to a component-property
3. Calls method selectBook when a click event is triggered on this button element (or its children) and passes in the event object.
4. Two way data binding  is used in forms.


## Two way data-binding (example)

<iframe class="stretch" src="https://embed.plnkr.co/HpQHJ6ljGFrHy8abCPuh/" frameborder="0" allowfullscreen></iframe>


## Property binding
*Can be used to show / hide CSS Classes

```
<div [class.filter-is-visible]=“isVisible“>
```

OR

```
<div [ngClass]="{active: isActive, disabled: isDisabled}">

<div [ngClass]="selCat==category.name ? 'selected' : '‘ ">
<div [ngClass]="!navClosed ? 'filter filter-is-visible': 'filter‘ ">
```

Note:
- `[class.extra-sparkle]`
   - Binds CSS-class `filter-is-visible` on the element to the result of the expression `isVisible`.
- `[ngClass]`
   - Binds CSS-class on the element to the result of the associated map values.
   - The right-hand expression should return `{class-name: true/false}` map.


## Forms
