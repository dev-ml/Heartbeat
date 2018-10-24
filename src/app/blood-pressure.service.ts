import { Observable, BehaviorSubject } from 'rxjs';
import { BloodPressure } from './blood-pressure';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodPressureService {

  private bloodPressureHistory = new BehaviorSubject<BloodPressure[]>([]);
  constructor() { }

  add(pressure: BloodPressure) {
    this.bloodPressureHistory.next([...this.bloodPressureHistory.value, pressure]);
  }

  getHistory(): Observable<BloodPressure[]> {
    return this.bloodPressureHistory.asObservable();
  }
}
