import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from './accordion/accordion.module';
import { CountrySelectModule } from './country-select/country-select.module';
import { DetailsListModule } from './details-list/details-list.module';
import { FlagModule } from './flag/flag.module';
import { GroupButtonsModule } from './group-buttons/group-buttons.module';
import { IconModule } from './icon/icon-module';
import { SnackBarModule } from './snack-bar/snack-bar.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    CountrySelectModule,
    DetailsListModule,
    FlagModule,
    GroupButtonsModule,
    IconModule,
    SnackBarModule
  ],
  exports: [
    AccordionModule,
    CountrySelectModule,
    DetailsListModule,
    GroupButtonsModule,
    FlagModule,
    IconModule,
    SnackBarModule
  ],
})
export class ComponentsModule { }
