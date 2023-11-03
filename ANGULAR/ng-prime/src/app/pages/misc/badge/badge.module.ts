import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { BadgeRouterModule } from './badge-router';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, BadgeModule, BadgeRouterModule]
})
export class PBadgeModule { }
