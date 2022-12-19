import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChart: any = [];
  pieChart: any = [];
  cards: any = [];
  dataTable: any = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.pieChart = this.dashboardService.pieChart();
    this.cards = this.dashboardService.cards();
    this.dataTable = this.dashboardService.dataTable();
  }
}
