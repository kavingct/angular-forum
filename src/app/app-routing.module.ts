import { TopicsComponent } from './topics/topics.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:id', component: CategoryDetailComponent},
  {path: 'topic/:id', component: TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
