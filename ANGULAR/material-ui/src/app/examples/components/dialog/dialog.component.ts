import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => { this.animal = result });
  }

  openDialog3() { this.dialog.open(DialogContentExampleDialog2) }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-1.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'dialog-content-example-dialog-2',
  templateUrl: 'dialog-2.html',
})
export class DialogContentExampleDialog2 {}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-3.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void { this.dialogRef.close() }
}
