import {Component} from '@angular/core';
import {Category, mockCategories} from './mocks/categories';
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

  private static sortParties(party1: Party, party2: Party): number {
    if (party1.afkorting > party2.afkorting) {
      return 1;
    } else if (party1.afkorting < party2.afkorting) {
      return -1;
    } else {
      return 0;
    }
  }

  private filterBooks(category: Category): void {
    if (category.name === 'Alles') {
      this.parties = mockParties;
      return;
    }
    this.parties = mockParties.filter(party => party.categorie === category.name).sort(AppComponent.sortParties);
  }

  clicked(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      category.selected = category === selectedCategory;
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  search() {
  }

  toggleSideBar() {
    this.navClosed = !this.navClosed;
  }
}
