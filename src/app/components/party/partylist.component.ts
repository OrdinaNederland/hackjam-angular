import {Component, Input} from '@angular/core';
import {Party} from '../../mocks/parties';

@Component({
  moduleId: module.id,
  selector: 'app-party-list',
  templateUrl: 'partylist.component.html'
})
export class PartyListComponent {

  @Input() parties: Party[];
  @Input() sidebarVisible: boolean;

  clicked(party: Party) {
    console.log(`Klik.. ${party.titel}`);
  }
}
