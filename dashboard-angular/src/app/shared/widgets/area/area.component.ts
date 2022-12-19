import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions: any;
  Highcharts = Highcharts;
  @Input() data: any = [];
  constructor() {}
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random Data',
      },
      subtitle: {
        text: 'demo',
      },

      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}</b></span><br>',
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
