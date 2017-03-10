import {Injectable} from '@angular/core';
import {mockParties, Party} from '../mocks/parties';
import {Category, mockCategories} from '../mocks/categories';

@Injectable()
export class AppService {
  getParties(): Promise<Party[]> {
    return Promise.resolve(mockParties);
  }

  getCategories(): Promise<Category[]> {
    return Promise.resolve(mockCategories);
  }
}
