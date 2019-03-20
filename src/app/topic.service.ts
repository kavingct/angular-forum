import { Observable, of } from 'rxjs';
import { TOPICS } from './mock-topics';
import { Topic } from './topic';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopic(id: number): Observable<Topic> {
    return of(TOPICS.find(topic => topic.id === id));
  }
}
