import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'base64',
  templateUrl: './base64.component.html'
})
export class Base64Component {
  fileName: string = 'Select a file...';
  noFileName: boolean = false;
  imgSrc: any = '';
  @Input() color: string = '';
  @Input('no-file-name') set setNoFileName(noFileName: boolean | '') { this.noFileName = noFileName === '' || noFileName }
  @Output() uploaded = new EventEmitter();

  constructor() {}

  selecFile(file: any) {
    if(file.target.files.length > 0) {
        let file_ = file.target as HTMLInputElement,
            fileReceived: File = (file_.files as FileList)[0]

        this.fileName = fileReceived.name;
        this.readFile(fileReceived);
    }
    else this.fileName = 'Select a file...';
  }

  readFile(file: any) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      this.imgSrc = filereader.result;
      console.log('BASE64', this.imgSrc)
      this.uploaded.emit(filereader.result);
    }
  }
}

const routes: Routes = [
  { path: '', component: Base64Component }
];

@NgModule({
  declarations: [Base64Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Base64Component,
    RouterModule
  ]
})
export class Base64Module {}
