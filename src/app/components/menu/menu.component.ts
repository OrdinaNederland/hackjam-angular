import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Category} from '../../mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'bs-menu',
  templateUrl: 'menu.template.html'
})

export class MenuComponent {

  @Input() categories: Category[];
  @Output() categoryChanged: EventEmitter<Category> = new EventEmitter<Category>();

  changeCategory(category): void {
    this.categoryChanged.emit(category);
    category.selected = true;
  }

}

