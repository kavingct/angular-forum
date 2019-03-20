import { TitleService } from './../title.service';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(public categoryService: CategoryService, public titleService: TitleService) { }

  ngOnInit() {
    this.titleService.title = 'Angular Forum';
    this.titleService.isBackEnabled = false;
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
