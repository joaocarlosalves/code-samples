import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'p-tab',
  template: `
      <li
        class='p-tab gap-10px'
        [class.p-tab-active]="active"
        [ngClass]="setClassList()"
        (click)="activeThisTab()">
        <span>{{ text }}<ng-content></ng-content></span>
      </li>
  `,
  styleUrls: ['./p-tabs.css']
})
export class PootaTabComponent implements OnInit {
  left: boolean = true;
  right: boolean = false;
  regularIcon: boolean = false;
  solidIcon: boolean = true;
  v4Icon: boolean = false;
  primary: boolean = false;
  secondary: boolean = false;
  success: boolean = false;
  warning: boolean = false;
  disabled: boolean = false;
  red: boolean = false;
  error: boolean = false;
  black: boolean = false;
  dark: boolean = false;
  gray: boolean = false;
  white: boolean = false;
  blue: boolean = false;
  orange: boolean = false;
  yellow: boolean = false;
  purple: boolean = false;
  green: boolean = false;
  classList: any = [];
  @Input() active: boolean = false;
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() text: string = '';
  @Input('left') set setLeft(left: boolean | '') { this.left = left === '' || left }
  @Input('right') set setRight(right: boolean | '') { this.right = right === '' || right }
  @Input('solid-icon') set setSolidIcon(solid: boolean | '') { this.solidIcon = solid === '' || solid }
  @Input('solid') set setSolid(solid: boolean | '') { this.solidIcon = solid === '' || solid }
  @Input('v4-icon') set setv4Icon(v4: boolean | '') { this.v4Icon = v4 === '' || v4 }
  @Input('v4') set setv4(v4: boolean | '') { this.v4Icon = v4 === '' || v4 }
  @Input('regular-icon') set setRegularIcon(regular: boolean | '') { this.regularIcon = regular === '' || regular }
  @Input('regular') set setRegular(regular: boolean | '') { this.regularIcon = regular === '' || regular }
  @Input('primary') set setprimary(primary: boolean | '') { this.primary = primary === '' || primary }
  @Input('secondary') set setsecondary(secondary: boolean | '') { this.secondary = secondary === '' || secondary }
  @Input('success') set setsuccess(success: boolean | '') { this.success = success === '' || success }
  @Input('warning') set setwarning(warning: boolean | '') { this.warning = warning === '' || warning }
  @Input('disabled') set setdisabled(disabled: boolean | '') { this.disabled = disabled === '' || disabled }
  @Input('red') set setred(red: boolean | '') { this.red = red === '' || red }
  @Input('error') set seterror(error: boolean | '') { this.error = error === '' || error }
  @Input('black') set setblack(black: boolean | '') { this.black = black === '' || black }
  @Input('dark') set setdark(dark: boolean | '') { this.dark = dark === '' || dark }
  @Input('gray') set setgray(gray: boolean | '') { this.gray = gray === '' || gray }
  @Input('white') set setwhite(white: boolean | '') { this.white = white === '' || white }
  @Input('blue') set setblue(blue: boolean | '') { this.blue = blue === '' || blue }
  @Input('orange') set setorange(orange: boolean | '') { this.orange = orange === '' || orange }
  @Input('yellow') set setyellow(yellow: boolean | '') { this.yellow = yellow === '' || yellow }
  @Input('purple') set setpurple(purple: boolean | '') { this.purple = purple === '' || purple }
  @Input('green') set setgreen(green: boolean | '') { this.green = green === '' || green }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() { this.cdr.detectChanges() }

  ngOnInit() { if(this.right) this.left = false }

  setClassList() {
    if(this.color != '') {
      this.classList.push(`color-${ this.color }`);
      this.classList.push(`border-${ this.color }`);
    }
    if(this.right) this.classList.push('tab-right');
    if(this.left) this.classList.push('tab-left');
    if(this.primary) this.classList.push('tab-primary');
    if(this.secondary) this.classList.push('tab-secondary');
    if(this.success) this.classList.push('tab-success');
    if(this.warning) this.classList.push('tab-warning');
    if(this.disabled) this.classList.push('tab-disabled');
    if(this.red) this.classList.push('tab-red');
    if(this.error) this.classList.push('tab-error');
    if(this.black) this.classList.push('tab-black');
    if(this.dark) this.classList.push('tab-dark');
    if(this.gray) this.classList.push('tab-gray');
    if(this.white) this.classList.push('tab-white');
    if(this.blue) this.classList.push('tab-blue');
    if(this.orange) this.classList.push('tab-orange');
    if(this.yellow) this.classList.push('tab-yellow');
    if(this.purple) this.classList.push('tab-purple');
    if(this.green) this.classList.push('tab-green');

    return this.classList;
  }
  activeThisTab() {}
}
