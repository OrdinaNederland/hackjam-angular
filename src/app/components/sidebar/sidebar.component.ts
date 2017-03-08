import {Component, Output, EventEmitter, Input} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.template.html'
})

export class SidebarComponent {

  searchString: string;

  @Output() searchParty: EventEmitter<string> = new EventEmitter<string>();
  @Output() sidebarToggled: EventEmitter<any> = new EventEmitter();
  @Input() sidebarVisible: boolean;

  search() {
    this.searchParty.emit(this.searchString);
  }

  toggleSideBar() {
    this.sidebarToggled.emit();
  }

}
