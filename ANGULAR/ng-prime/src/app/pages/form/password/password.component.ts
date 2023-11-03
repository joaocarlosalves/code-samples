import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'password',
  templateUrl: './password.component.html'
})
export class PasswordComponent  implements OnInit {
  value: string = '';
  formGroup!: FormGroup;

  ngOnInit() {
      this.formGroup = new FormGroup({ value: new FormControl() });
  }

}
