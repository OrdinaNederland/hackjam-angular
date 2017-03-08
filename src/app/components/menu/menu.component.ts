import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../../mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
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

