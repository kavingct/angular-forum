import { CATEGORIES } from './mock-categories';
import { Observable, of } from 'rxjs';
import { TOPICS } from './mock-topics';
import { Topic } from './topic';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailService {

  constructor() { }

  getTitle(id: number): Observable<string> {
    return of(CATEGORIES.find(category => category.id === id).title);
  }

  getTopics(id: number): Observable<Topic[]> {
    return of(TOPICS.filter(topic => topic.categoryId === id));
  }
}
