import {Component, OnInit} from '@angular/core';
import {Category} from './mocks/categories';
import {mockParties, Party} from './mocks/parties';
import {AppService} from './services/app.service';

@Component({
  moduleId: module.id,
  selector: 'app-kieskompas',
  // template: ``,
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  parties: Party [];
  categories: Category [];
  navClosed: Boolean = true;
  searchString: string;

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

  constructor(private appService: AppService) {
    // empty constructor
  }

  public ngOnInit() {
    this.appService.getParties().then((parties) => {
      this.parties = parties.sort(AppComponent.sortParties);
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

  search() {
    console.log(this.searchString);

    this.parties = mockParties.filter(
      b => b.trefwoorden.find(trefwoord => trefwoord.toLowerCase().includes(this.searchString.toLowerCase()))
      || b.titel.toLowerCase().includes(this.searchString.toLowerCase())
    ).sort(AppComponent.sortParties);
  }

  toggleSideBar() {
    this.navClosed = !this.navClosed;
  }
}
