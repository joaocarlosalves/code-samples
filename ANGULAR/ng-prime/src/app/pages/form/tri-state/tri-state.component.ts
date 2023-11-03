import { Component } from '@angular/core';

@Component({
  selector: 'tri-state',
  templateUrl: './tri-state.component.html'
})
export class TriStateComponent {
  value: boolean | null = null;
}
