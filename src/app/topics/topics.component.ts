import { TitleService } from './../title.service';
import { TopicService } from './../topic.service';
import { Topic } from './../topic';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topic: Topic;

  constructor(private topicService: TopicService, private titleService: TitleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTopic();
    this.titleService.isBackEnabled = true;
  }

  getTopic() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.topicService.getTopic(id).subscribe(topic => { this.topic = topic; this.titleService.title = topic.title; });
  }

}
