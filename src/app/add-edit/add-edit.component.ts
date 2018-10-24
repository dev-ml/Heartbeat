import { Component, OnInit } from '@angular/core';
import { BloodPressure } from '../blood-pressure';

@Component({
  selector: 'hb-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  model = new BloodPressure(120, 80, 70);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }
}
