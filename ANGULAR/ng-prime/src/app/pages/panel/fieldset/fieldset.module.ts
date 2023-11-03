import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { PFieldsetRouterModule } from './fieldset-router';
import { FieldsetComponent } from './fieldset.component';

@NgModule({
  declarations: [FieldsetComponent],
  imports: [CommonModule, FormsModule, FieldsetModule, PFieldsetRouterModule]
})
export class PFieldsetModule {}
