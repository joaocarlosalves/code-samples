import { Component } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  providers: [{ provide: NgControl, useValue: new FormControl() }]
})
export class RadioButtonComponent {
  ingredient: string = '';
  selectedCategory: any = null;
  formGroup!: FormGroup;
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  ngOnInit() {
      this.selectedCategory = this.categories[1];
      this.formGroup = new FormGroup({ selectedCategory: new FormControl() });
  }
}
