import {Component, Input} from '@angular/core';
import {Party} from '../../mocks/parties';

@Component({
  moduleId: module.id,
  selector: 'app-party-list',
  templateUrl: 'partylist.template.html'
})

export class PartyListComponent {

  @Input() parties: Party[];

}



