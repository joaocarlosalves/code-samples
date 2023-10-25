import { Directive, ElementRef, Input, NgModule, OnInit } from '@angular/core';

@Directive({ selector: '[PootaCaret]' })

export class PootaCaretDirective implements OnInit {
  @Input() PootaCaret: string = '';
  @Input('caret-color') set setC(c: string) { this.PootaCaret = c };
  @Input('caret') set setCt(c: string) { this.PootaCaret = c };

  constructor(private cr: ElementRef<HTMLElement>) {}

  ngOnInit() { this.cr.nativeElement.style.caretColor = `var(--${ this.PootaCaret })` }
}

@NgModule({
  declarations: [PootaCaretDirective],
  exports: [PootaCaretDirective]
})

export class PootaCaretDirectiveModule {}
