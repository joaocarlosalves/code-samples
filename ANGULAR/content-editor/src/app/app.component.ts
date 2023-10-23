import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'content-editor',
  template: `
    <main>
      <div class='editor'>
        <editor [init]="init" [(ngModel)]="html"></editor>
        <button (click)="setPreview()">PREVIEW</button>
      </div>
      <div #prev class='preview'></div>
    </main>
  `
})
export class AppComponent {
  html: string = '';
  plugins: string = `autosave advlist autolink link image lists charmap preview anchor pagebreak
    codesample searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime
    media table emoticons wordcount`;
  toolbar: string = `newdocument undo redo styles fontsize fontsizeinput bold italic underline
    strikethrough h1 h2 h3 h4 h5 h6 outdent indent subscript superscript forecolor backcolor
    alignLeft alignCenter alignRight alignJustify hr cut copy paste remove lists anchor insertdatetime
    lineheight align table bullist numlist pagebreak charmap emoticons image media selectall code
    preview print wordcount searchreplace fullscreen `;
  init: {} = {
    plugins: this.plugins,
    toolbar: this.toolbar,
    menubar: '',
    base_url: '/tinymce',
    suffix: '.min'
  }
  @ViewChild('prev') preview: ElementRef;

  setPreview() { this.preview.nativeElement.innerHTML = this.html }
}
