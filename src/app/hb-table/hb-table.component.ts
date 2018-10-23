import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HbTableDataSource } from './hb-table-datasource';

@Component({
  selector: 'hb-table',
  templateUrl: './hb-table.component.html',
  styleUrls: ['./hb-table.component.scss'],
})
export class HbTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HbTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new HbTableDataSource(this.paginator, this.sort);
  }
}
