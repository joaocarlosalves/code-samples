import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRouterModule } from 'app/app-router';
import { LayoutModule } from 'layout/layout.module';

@Component({
  selector: 'auth-guard',
  template: '<layout></layout>'
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, LayoutModule],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
