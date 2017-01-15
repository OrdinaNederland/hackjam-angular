import {Component, OnInit} from '@angular/core';
import {Category} from './mocks/categories';
import {mockBooks, Book} from './mocks/books';
import {AppService} from './services/app.service';


@Component({
  moduleId: module.id,
  selector: 'bookstore',
  // template: ``,
  templateUrl: './app.template.html'
})

export class AppComponent implements OnInit {
  books: Book [];
  categories: Category[];
  navClosed: Boolean = true;
  selCat: String = 'All';
  private searchString;

  constructor(private appService: AppService) {
    //empty constructor
  }

  public ngOnInit() {
    this.appService.getBooks().then((books) => {
      this.books = books;
    });

    this.appService.getCategories().then(categories => {
      this.categories = categories;
    });
  }

  clicked(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      category.selected = category === selectedCategory;
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if (category.name === "All") {
      this.books = mockBooks;
      return;
    }
    this.books = mockBooks.filter(book => book.category === category.name);
  }


  search() {
    console.log(this.searchString);
    this.books = mockBooks.filter(
      b => b.category.toLowerCase().includes(this.searchString.toLowerCase())
      || b.title.toLowerCase().includes(this.searchString.toLowerCase())
    );
  }


  toggleSideBar() {
    this.navClosed = !this.navClosed;
  }
}
