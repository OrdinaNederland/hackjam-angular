import {Component, Input} from '@angular/core';
import {Party} from '../../mocks/parties';

@Component({
  moduleId: module.id,
  selector: 'app-party-list',
  templateUrl: 'partylist.template.html'
})

export class PartyListComponent {
  // navClosed : boolean = true;
  @Input() parties: Party[];
  @Input() sidebarVisible: boolean;

  clicked(party: Party) {
    console.log(`Klik.. ${party.titel}`);
  }
}



