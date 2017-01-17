## Angular 101 - Part 2

#### Services
- Services are used to provide data to components

#### Architecture
- Parent-child relations between components
- Passing data and events
- RxJS 


## Services
- Steps how to make a service for getting the books and categories
  Create a new folder: app/services
  Add a service in this folder: app.service.ts
  Import this new service in app.component.ts
  Import {AppService} from ‘./service/app.service’
  Define the service as a provider in app.component.ts
  @Component  providers: [AppService]
  Inject an instance of the AppService via the constructor of the AppComponent
  Use the AppService to fetch the Books and Categories  make use of the lifecycle hook: ngOnInit

Note:
- To make this service injectable, we need to create a provider for it first.


## AppService
import{Book, mockBooks} from ‘../mocks/books’
// To do: 
// import categories….

 export class AppService {
       getBooks(): Promise<Books[]> {
           return Promise.resolve(mockBooks);
       }

        // Todo: 
        getCategories(): …
       }
}

Note:
- You export the AppService class so that you can import it into the application that you just created.
- Use `Promise` for asynchronous calls


## Use the AppService in your AppComponent
Import { AppService } from './services/app.service';

@Component({
    selector: 'bookstore',
    templateUrl: '../app/app.template.html',
    providers: [ AppService ]
})

Note:
- To make this service injectable, we need to create a provider for it first.


## Inject service via the constructor of the AppComponent

constructor(private appService: AppService) {  }

public ngOnInit(){
    this.appService.getBooks().then((books) => {
      this.books = books;
    });

    // Todo: 
    // get the categories…
  }

Note:
- Use lifecycle-hook: `ngOnInit()` !!!
- Use `implements OnInit`


## Architecture (1/3)
*Proposed architecture*

![architecture](images/part2/architecture.png)

Note:
- Events are emitted by parent / child components


## Architecture (2/3)

#### Input for components
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
