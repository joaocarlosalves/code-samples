import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {
  text: any;

  @ViewChild('prev') preview: ElementRef | any;

  setPreview() { this.preview.nativeElement.innerHTML = this.text }
}
