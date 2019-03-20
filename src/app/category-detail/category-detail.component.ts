import { TitleService } from './../title.service';
import { Topic } from './../topic';
import { CategoryDetailService } from './../category-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  topics: Topic[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryDetailService: CategoryDetailService,
    public titleService: TitleService
  ) { }

  ngOnInit() {
    this.getTopics();
    this.titleService.isBackEnabled = true;
  }

  getTopics(): void {

    const categoryId = +this.activatedRoute.snapshot.paramMap.get('id');

    this.categoryDetailService.getTitle(categoryId).subscribe(title => this.titleService.title = title);

    this.categoryDetailService.getTopics(categoryId).subscribe(topics => this.topics = topics);

  }

}
