import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'p-table',
  templateUrl: './p-table.component.html',
  styleUrls: ['./p-table.css']
})
export class PootaTableComponent implements OnInit {
  /*
    - criar scroll
      - scroll horizontal tbm
      - scroll: boolean
      - passar tamanho max de altura
    - double click edit
    - responsive: boolean
    - footer: boolean
    - ordenar datas
      - fazer date compare
  */

  pagination: boolean = false;
  sort: boolean = false;
  editRow: boolean = false;
  deleteRow: boolean = false;
  bold: boolean = false;
  striped: boolean = false;
  zebra: boolean = false;
  rounded: boolean = false;
  zoom: boolean = false;
  mini: boolean = false;
  micro: boolean = false;
  center: boolean = false;
  tooltip: boolean = false;
  noTable: boolean = false;
  doubleclickedit: boolean = false;
  searching: boolean = false;
  searchThis: any = '';
  reset: boolean = false;
  firstlastpagination: boolean = false;
  booleanValue: boolean = false
  pages = Array
  cellArray = Array
  maxPages: any = '';
  updatedCells: any = '';
  lastTable: any = '';
  currentPage: number = 1
  pagesCounter: number = 0
  indexStart: number = 0
  indexEnd: number = 0
  cellLength: number = 0
  searchField: string | number = '';
  @Input() headercolor: string = '';
  @Input() headerfontsize: string = '';
  @Input() cellfontsize: string = '';
  @Input() editiconcolor: string = '';
  @Input() deleteiconcolor: string = '';
  @Input() edittooltiptext: string = '';
  @Input() deletetooltiptext: string = '';
  @Input() border: string = '';
  @Input() pagesize: number = 0
  @Input() headers: any = '';
  @Input() cells: any = '';
  @Input('search') set setSearchThis(search: any) { if(search !== undefined) this.searchTable(search) }
  @Input('reset') set setReset(reset: any) { if(reset) this.resetTable(this.cells) }
  @Input('sort') set setSort(sort: boolean | '') { this.sort = sort === '' || sort }
  @Input('searching') set setSearching(searching: boolean | '') { this.searching = searching === '' || searching }
  @Input('editrow') set setEdit(editrow: boolean | '') { this.editRow = editrow === '' || editrow }
  @Input('deleterow') set setDeleteRow(deleterow: boolean | '') { this.deleteRow = deleterow === '' || deleterow }
  @Input('pagination') set setPagination(pagination: boolean | '') { this.pagination = pagination === '' || pagination }
  @Input('bold') set setCellBold(bold: boolean | '') { this.bold = bold === '' || bold }
  @Input('rounded') set setRounded(rounded: boolean | '') { this.rounded = rounded === '' || rounded }
  @Input('zebra') set setZebra(zebra: boolean | '') { this.striped = zebra === '' || zebra }
  @Input('striped') set setStriped(striped: boolean | '') { this.striped = striped === '' || striped }
  @Input('zoom') set setZoom(zoom: boolean | '') { this.zoom = zoom === '' || zoom }
  @Input('mini') set setMini(mini: boolean | '') { this.mini = mini === '' || mini }
  @Input('micro') set setMicro(micro: boolean | '') { this.micro = micro === '' || micro }
  @Input('center') set setCenter(center: boolean | '') { this.center = center === '' || center }
  @Input('tooltip') set setTooltip(tooltip: boolean | '') { this.tooltip = tooltip === '' || tooltip }
  @Input('doubleclickedit') set setdoubleclickedit(doubleclickedit: boolean | '') { this.doubleclickedit = doubleclickedit === '' || doubleclickedit }
  @Input('firstlastpagination') set setfirstLastPagination(firstlastpagination: boolean | '') { this.firstlastpagination = firstlastpagination === '' || firstlastpagination }
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() searchReturn = new EventEmitter();

  constructor() {}

  async ngOnInit() {
    await this.setBorders();
    this.resetTable(this.cells);


  }

  prevPage() {
    if(this.currentPage === 1) this.goToPage(this.pagesCounter);
    else this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    if(this.currentPage < this.pagesCounter) this.goToPage(this.currentPage + 1);
    else this.goToPage(1);
  }

  lastPage() { this.goToPage(this.pagesCounter) }

  firstPage() { this.goToPage(1) }

  editThisRow(row: any) { this.edit.emit(row) }

  deleteThisRow(row: any) { this.delete.emit(row) }

  async goToPage(pag: any) {
    this.currentPage = pag;
    await this.setIndex(this.lastTable || this.cells);
    await this.updateTable(this.lastTable || this.cells);
  }

  setBorders() {
    switch(this.border) {
      case undefined || '': this.border = ''; break;
      case 'all': this.border = 'border-table'; break;
      case 'top': this.border = 'border-top'; break;
      case 'bottom': this.border = 'border-bottom'; break;
      case 'left': this.border = 'border-left'; break;
      case 'right': this.border = 'border-right'; break;
      case 'bottom-left':
      case 'top-left': this.border = 'border-left border-top'; break;
      case 'bottom-right':
      case 'top-right': this.border = 'border-right border-bottom'; break;
      default: this.border = ''; break;
    }
  }

  sortTable(table: any, header: any, date: any | null, boolean: any) {
    this.booleanValue = !this.booleanValue;
    table.sort((a: any, b: any) => {
        let a1: any, b1: any, d1: any, d2: any;
        if(date) {
            a1 = a[header].replaceAll('/', '-');
            b1 = b[header].replaceAll('/', '-');
            a1 = a[header].split('-');
            b1 = b[header].split('-');
            d1 = new Date(`${ a1[2] }-${ a1[1] }-${ a1[0] }`);
            d2 = new Date(`${ b1[2] }-${ b1[1] }-${ b1[0] }`);
        } else {
            d1 = a[header];
            d2 = b[header];
        }
        if(boolean) return d2 < d1 ? 1 : d2 > d1 ? -1 : 0;
        else return d2 > d1 ? 1 : d2 < d1 ? -1 : 0;
    })
  }

  async searchTable(event: string | number) {
    if(event !== '') {
       let table = this.cells.filter((item: any) => Object.values(item).some(cell => {
        let cl = new String(cell).toLowerCase(),
            ev = new String(event).toLowerCase();

        if(cl.includes(`${ev}`)) return cell;
      }))

      if(table.length === 0) this.noTable = true;
      else this.noTable = false;

      await this.resetTable(table);

      this.searchReturn.emit(table);
    }
    else {
      await this.resetTable(this.cells);
      this.searching = false;
      this.searchReturn.emit(false);
    }
  }

  //1
  initCounters() {
    this.currentPage = 1;
    this.indexStart = 0;
    this.indexEnd = this.pagesize;
  }

  //2
  setPagesCounter(table: any) { this.pagesCounter = Math.round(table.length / this.pagesize) }

  //3
  setIndex(table: any){
    if(this.currentPage > 1 && this.pagesCounter > this.currentPage) {
      this.indexStart = ((this.pagesize * this.currentPage) - this.pagesize);
      this.indexEnd = this.indexStart + this.pagesize;
    } else if(this.currentPage === this.pagesCounter) {
      this.indexStart = ((this.pagesize * this.currentPage) - this.pagesize);
      this.indexEnd = table.length;
    } else {
      this.indexStart = 0;
      this.indexEnd = this.pagesize;
    }
  }

  //4
  updateTable(table: any) {
    this.lastTable = table;
    this.updatedCells = table.slice(this.indexStart, this.indexEnd);
  }


  async resetTable(table: any) {
    if(this.pagination) {
      await this.initCounters();
      await this.setPagesCounter(table);
      await this.setIndex(table);
      await this.updateTable(table);
    }
    else this.resetTable(this.cells);
  }
}
