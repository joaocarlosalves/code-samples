import { Component, Input } from '@angular/core';

@Component({
  selector: 'dates',
  templateUrl: './dates.component.html'
})
export class DatesComponent {
  today: Date = new Date();
  day: any = this.today.getDate();
  weekDay: any = this.today.getDay();
  month: any = this.today.getMonth();
  year: any = this.today.getFullYear();
  daysNames: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthsNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  opt: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
  @Input() format: string = 'pt-BR';
  @Input() formatedDate: string = '';

  ngOnInit() { this.setFormat('en-us') }

  setFormat(format: string) { this.formatedDate = new Date(this.today).toLocaleDateString(format, this.opt) }

  checkIsEqual(checkThis: string, equalThis: string) { return checkThis == equalThis }

  checkIsBefore(day: string, before: string) { return new Date(day).getTime() < new Date(before).getTime() }

  checkIsAfter(day: string, after: string) { return new Date(day).getTime() > new Date(after).getTime() }

  checkIsWeekend(day: string) { return new Date(day).getDay() == 6 || new Date(day).getDay() == 0 }
}
