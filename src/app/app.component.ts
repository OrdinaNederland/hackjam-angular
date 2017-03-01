import {Component} from '@angular/core';

// Book Type
export class Book {
  title: Number;
  cover: String;
  category: String;
}

// TODO: Category Type
export class Category {
}

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  // template: ``,
  templateUrl: './app.component.html'
})

export class AppComponent {
  books: Book [] = []; // use mocks data instead
  categories: String [] = ['Alles']; // use mocks data instead
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
