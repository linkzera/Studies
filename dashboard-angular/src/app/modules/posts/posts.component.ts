import { DashboardService } from './../dashboard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() posts: any = [];

  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.posts = this.dashboardService.posts();
  }
}
