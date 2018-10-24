import { BloodPressureService } from './../blood-pressure.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HistoryDataSource } from './history-datasource';

@Component({
  selector: 'hb-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HistoryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['systolic', 'diastolic', 'pulse'];

  constructor(private bloodPressureService: BloodPressureService) {}

  ngOnInit() {
    this.dataSource = new HistoryDataSource(this.paginator, this.sort, this.bloodPressureService);
  }
}
