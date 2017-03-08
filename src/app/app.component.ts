import {Component} from '@angular/core';
import {mockCategories, Category} from './mocks/categories';

// Party Type
export class Party {
  afkorting: String;
  titel: String;
  lijsttrekker: String;
  logo: String;
  trefwoorden?: String[];
  categorie: String;
}

@Component({
  moduleId: module.id,
  selector: 'app-kieskompas',
  // template: ``,
  templateUrl: './app.component.html'
})

export class AppComponent {
  parties: Party [] = []; // use mocks data instead
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
