import { Component } from '@angular/core';

@Component({
  selector: 'join-concat',
  templateUrl: './join-concat.component.html',
  styleUrls: ['./join-concat.css']
})
export class JoinConcatComponent {
  names: any[] = [
    'Sarah', 'Angela', 'Martha', 'Cindy', 'Muriel'
  ];
  joinedNames: string = '';
  concatenedNames: any = '';
  tags: any = {
    flags: ['array.join()', 'array.concat()', 'json pipe']
  }

  constructor() {}

  joinNames() {
    this.joinedNames = this.names.join();
  }

  concatNames() {
    this.concatenedNames = this.names.concat('Sandra');
  }

}
