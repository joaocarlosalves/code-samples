import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acc';

  buttons = [
    { "text": "Todos", "value": "valor-1" },
    { "text": "Ripple", "value": "valor-2" },
    { "text": "SWIFT Automático", "value": "valor-3" },
    { "text": "SWIFT Manual", "value": "valor-4" }
  ];
  getActiveButton(event: any) { console.log(event) }
}
