import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  loading: boolean = false;

  load() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }
}
