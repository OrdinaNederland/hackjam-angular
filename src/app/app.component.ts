import {Component} from '@angular/core';

// Party Type
export class Party {
  afkorting: String;
  titel: String;
  lijsttrekker: String;
  logo: String;
  trefwoorden?: String[];
  categorie: String;
}

// TODO: Category Type
export class Category {
}

@Component({
  moduleId: module.id,
  selector: 'app-partylist',
  // template: ``,
  templateUrl: './app.component.html'
})

export class AppComponent {
  parties: Party [] = []; // use mocks data instead
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
