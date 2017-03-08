import {Component} from '@angular/core';
import {mockCategories, Category} from './mocks/categories';
import {mockParties, Party} from './mocks/parties';

@Component({
  moduleId: module.id,
  selector: 'app-kieskompas',
  // template: ``,
  templateUrl: './app.component.html'
})

export class AppComponent {
  parties: Party [] = mockParties; // use mocks data instead
  categories: Category [] = mockCategories; // use mocks data instead
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
