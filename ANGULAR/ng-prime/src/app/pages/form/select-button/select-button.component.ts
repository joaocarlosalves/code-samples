import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'select-button',
  templateUrl: './select-button.component.html'
})
export class SelectButtonComponent {
  value: string = 'off';
  value1: string = 'off';
  value2: string = 'Option 1';
  formGroup!: FormGroup;
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];
  stateOptions2: any[] = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2', constant: true }
  ];
  paymentOptions: any[] = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 }
  ];
  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'Left' },
    { icon: 'pi pi-align-right', justify: 'Right' },
    { icon: 'pi pi-align-center', justify: 'Center' },
    { icon: 'pi pi-align-justify', justify: 'Justify' }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({ value: new FormControl('on') });
  }
}
