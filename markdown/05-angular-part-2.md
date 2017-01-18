## Angular 101 - Part 2
*Services and architecture*

![architecture](images/part2/angular-architecture.jpg)

Note:
- Angular architecture is based on
  - small(er) components 
  - services to provide data to components


## Services (1/2)
*What's the point?*

- Provide a place where our components can retrieve data 
  - books
  - categories
- Are essentially a singleton
- Are declared as a 'provider' in the NG-module
- Are decorated with `@Injectable`
- Are injected into components via the constructor


## Services (2/2)
*How do I make one?*

1. Create a new folder: `app/services`
2. Add a TypeScript class in this folder (`app.service.ts`)
3. Define the service as a 'provider' in `app.module.ts`
4. Inject an instance of the AppService via the constructor of the AppComponent
5. Use the AppService to fetch the Books and Categories
   - make use of the lifecycle hook: `ngOnInit`

Note:
- To make this service injectable, we need to create a provider for it first.


## Sample code for App-Service

```
import { Injectable } from '@angular/core';
import { Book, mockBooks } from '../mocks/books';
// TODO:  import categories….

@Injectable()
export class AppService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(mockBooks);
    }

    // TODO: getCategories(): {}

}
```

Note:
- Use `Promise` for asynchronous calls
- We can improve this code by using RxJS `Observable`


## Sample code for App-Module

```
import {AppService} from './services/app.service';

@NgModule({
  imports: [
     // .... unchanged
  ],
  declarations: [
     // .... unchanged
  providers: [
    AppService
  ],
  bootstrap: [
     // .... unchanged
})
```

Note:
- To make this service injectable, we add it to the providers.


## Sample code for App-Component

```
  constructor(private appService: AppService) {
    //empty constructor
  }

  public ngOnInit() {
    this.appService.getBooks().then((books) => {
      this.books = books;
    });

    // TODO: get the categories…

  }

```

Note:
- Inject service via the constructor of the AppComponent
- Use `implements OnInit`
- Use lifecycle-hook: `ngOnInit()` !!!


## Architecture (1/3)
*Proposed architecture*

![architecture](images/part2/architecture.png)

Note:
- Events are emitted by parent / child components


## Architecture (2/3)
*Input for components*
- To define an input for a component, we use the `@Input` decorator.
- The input can be of an arbitrary type.

*More info:*
- See: [http://learnangular2.com/inputs/](http://learnangular2.com/inputs/)


## Architecture (3/3)
*Event flows* 
- The child component exposes an EventEmitter property 
  - The child emits events when something happens. 
  - The parent binds to that event property and reacts to those events.
- The child's EventEmitter property is an output property, adorned with an `@Output` decoration

*More info:*
- See: [http://learnangular2.com/outputs/](http://learnangular2.com/outputs/)
- See "parent listening for child event" in [Angular Cookbook](https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#child-to-parent)

Note:
- Events are essential to connect components
- Alternative is publish-subscribe using RXJS `Observable` and `Observer`


## Back to the proposed architecture

![architecture](images/part2/architecture.png)

Note:
- Next up: sample code for the components


## Creating the BookList-Component

- Create a new folder: `app/components/book`
  - Create a template for the book-list in this folder (`booklist.template.html`)
  - Copy the HTML for showing a book-list to the book-list template
  - Create the `BookListComponent` in this folder (`booklist.component.ts`)
  
- Replace the HTML in `app.template.html` with:
  - `<book-list [books]=“books”></book-list>`
  
- Import and declare the BookListComponent in `app.module.ts`


## Sample code BookList-Component (1/2)
*Template file - `booklist.template.html`*

```
<!--List of books-->

<section class="gallery" [class.filter-is-visible]="!navClosed">

<ul>
   <li *ngFor="let book of books">
      <img src="{{ book.cover }}" (click)="clicked"/>
   </li>
</ul>
```


## Sample code BookList-Component (2/2)
*Component class - `bookList.component.ts`*

```
import {Component, Input} from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'book-list',
   templateUrl: 'booklist.template.html'
})

export class BookListComponent {
   @Input books : Book[];
}
```

Note:
- `module.id` = absolute path component
- The `moduleId: module.id` property sets the base for module-relative loading of the `templateUrl`.
- See: [Component relative paths](https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html)


## Sample code Menu-Component (1/2)
*Template file - `menu.template.html`*

```

<li *ngFor="let category of categories" 
    (click)="changeCategory(category)">
    <a> {{category.name}} </a>
</li>

```


## Sample code Menu-Component (2/2)
*Component class - `menu.component.ts`*

```
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
   moduleId: module.id,
   selector: 'menu',
   templateUrl: 'menu.template.html'
})

export class MenuComponent {
   @Input categories : Category[];
   @Output categoryChanged = new EventEmitter<Category>();
  
   changeCategory(category) : void {
      this.categoryChanged.emit(category);
   }
}
```

Note:
- Input, Output and EventEmitter
- Used by components to emit custom Events 
- The parent binds to that event and reacts to those events


## Required changes in the application template, component and module
*1. Don't forget to add the new components to `app.module.ts` !!!*

*2. Add the menu to `app.template.html`*

```
   <menu (categoryChanged)="changeCategoryParent($event)"</menu>
```

*3.Add a method to respond to category changes in `app.component.ts`*

```
changeCategoryParent(selectedCategory: Category): void {
   this.categories = this.categories.map(category => {
      if (category === selectedCategory) {
         category.selected = true;
      } else {
         category.selected = false;
      }
      return category;
   });
   
   this.filterBooks(selectedCategory);
}
```


## Let's continue with hack-jam part 2 ...

![that-s-all-folks](images/part2/thats-all-folks.jpg)
