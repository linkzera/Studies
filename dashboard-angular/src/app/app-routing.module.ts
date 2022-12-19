import { PostComponent } from './modules/post/post.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/:id',
        component: PostComponent,
      },
      {
        path: 'articles',
        component: ArticlesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
