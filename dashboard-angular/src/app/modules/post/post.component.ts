import { DashboardService } from './../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  id: string = '';
  @Input() post: any = {};
  constructor(
    private route: ActivatedRoute,
    private dashboard: DashboardService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.post = this.dashboard.post(this.id);
  }
}
