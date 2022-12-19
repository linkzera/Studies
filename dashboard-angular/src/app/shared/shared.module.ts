import { PostsComponent } from './../modules/posts/posts.component';
import { PostComponent } from './../modules/post/post.component';
import { ArticlesComponent } from './../modules/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    ArticlesComponent,
    PostComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    AreaComponent,
    HighchartsChartModule,
    MatCardModule,
    CardComponent,
    PieComponent,
    TableComponent,
    MatTableModule,
    MatPaginatorModule,
    ArticlesComponent,
    MatProgressBarModule,
    PostComponent,
    PostsComponent,
  ],
})
export class SharedModule {}
