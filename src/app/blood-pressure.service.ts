import { Observable, BehaviorSubject } from 'rxjs';
import { BloodPressure } from './blood-pressure';
import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';

@Injectable({
  providedIn: 'root'
})
export class BloodPressureService {

  private storeData: BloodPressure[] = [];
  private bloodPressureHistory = new BehaviorSubject<BloodPressure[]>(this.storeData);
  constructor() {
    get('BloodPressure').then(data => this.updateStoreData(<BloodPressure[]>data));
  }

  add(pressure: BloodPressure) {
    this.storeData = [...this.bloodPressureHistory.value, pressure];
    set('BloodPressure', this.storeData);
    this.bloodPressureHistory.next(this.storeData);
  }

  getHistory(): Observable<BloodPressure[]> {
    return this.bloodPressureHistory.asObservable();
  }

  private updateStoreData(data: BloodPressure[]) {
    if (!data) {
      return;
    }

    this.storeData = data;
    this.bloodPressureHistory.next(this.storeData);
  }
}
