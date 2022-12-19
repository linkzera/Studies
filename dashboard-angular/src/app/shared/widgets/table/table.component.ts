import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() data: PeriodicElement[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    this.dataSource.paginator = this.paginator;
  }
}
