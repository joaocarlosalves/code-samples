import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  visible: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;
  visible5: boolean = false;
  visible6: boolean = false;
  visible7: boolean = false;
  visible8: boolean = false;
  position: string = 'center';
  cities: any;
  selectedCity: any;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS '}
    ];
  }

  confirmPosition(position: string) {
    this.position = position;
    this.visible6 = true;
  }
}
