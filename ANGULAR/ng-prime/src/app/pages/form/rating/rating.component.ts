import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  formGroup!: FormGroup;
  value!: number;

  ngOnInit() {
    this.formGroup = new FormGroup({ value: new FormControl(4) });
  }
}
