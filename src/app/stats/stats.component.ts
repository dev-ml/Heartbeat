import { BloodPressureService } from './../blood-pressure.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chartist from 'chartist';
import * as moment from 'moment';
import { BloodPressure } from '../blood-pressure';
import { map, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'hb-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
}) // [TODO] refactor
export class StatsComponent implements OnInit, OnDestroy {
  // Grid settings
  options: Chartist.ILineChartOptions = {
    axisX: {
      type: Chartist.FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: function (value) {
        return moment(value).format('MMM D');
      }
    }
  };

  data: Chartist.IChartistData = {
    series: []
  };

  // else
  dataSubscription: Subscription;

  constructor(private bloodPressureService: BloodPressureService) {
    this.dataSubscription = this.bloodPressureService.getHistory().pipe(
      map((bpa: BloodPressure[]) => [ // [TODO] Timestamp needs to be added to BloodPressure and mapped to x on the chart
        { name: 'diastolic', data: bpa.map((bp: BloodPressure) => ({ x: new Date(143134652600), y: bp.diastolic })) },
        { name: 'systolic', data: bpa.map((bp: BloodPressure) => ({ x: new Date(143134657000), y: bp.systolic })) },
        { name: 'pulse', data: bpa.map((bp: BloodPressure) => ({ x: new Date(143134659000), y: bp.pulse })) }
      ]),
      ).subscribe((data: Array<any>) => {
      console.log('subscribe bp:', data);
      this.data = { series: data };
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
