import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  step = 0;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(){}

  setStep(index: number) { this.step = index }

  nextStep() { this.step++ }

  prevStep() { this.step-- }
}
