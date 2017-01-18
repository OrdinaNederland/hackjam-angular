import {Component} from '@angular/core';
import {Category, categories} from './mocks/categories';

// Book Type
export class Book {
  title: Number;
  cover: String;
  category: String;
}

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  // template: ``,
  templateUrl: './app.template.html'
})

export class AppComponent {
  books: Book [] = []; // use mocks data instead
  categories: Category [] = categories;
  navClosed: Boolean = true;

  clicked() {
    console.log('Will be implemented in the next section');
  }

  search() {
  }

  toggleSideBar() {
    this.navClosed = !this.navClosed;
  }
}
