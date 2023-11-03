import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickListModule } from 'primeng/picklist';
import { PickListRouterModule } from './pick-list-router';
import { PickListComponent } from './pick-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [PickListComponent],
  imports: [CommonModule, FormsModule, ButtonModule, PickListModule, PickListRouterModule]
})
export class PPickListModule {}
