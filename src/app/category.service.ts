import { CATEGORIES } from './mock-categories';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
