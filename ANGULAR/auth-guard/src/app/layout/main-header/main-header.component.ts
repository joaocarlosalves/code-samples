import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  ngOnInit() {

  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

}
