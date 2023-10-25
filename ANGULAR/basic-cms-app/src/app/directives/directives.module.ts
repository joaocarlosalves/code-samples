import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PootaBackgroundDirectiveModule } from './p-background.directive';
import { PootaBorderDirectiveModule } from './p-border.directive';
import { PootaCaretDirectiveModule } from './p-caret.directive';
import { PootaGradientDirectiveModule } from './p-gradient.directive';
import { PootaColorDirectiveModule } from './p-color.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PootaBackgroundDirectiveModule,
    PootaBorderDirectiveModule,
    PootaCaretDirectiveModule,
    PootaColorDirectiveModule,
    PootaGradientDirectiveModule
  ],
  exports: [
    PootaBackgroundDirectiveModule,
    PootaBorderDirectiveModule,
    PootaCaretDirectiveModule,
    PootaColorDirectiveModule,
    PootaGradientDirectiveModule
  ]
})
export class DirectivesModule { }
