import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardModalComponent } from './app-add-card-modal/app-add-card-modal.component';
import { TableComponent } from './table/table.component';

export class DialogData {
  name: string = '';
  color: any;
  icon: any;
  description: any;
}
export class SegmentData {
  name: any;
  icon: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  segments: SegmentData[] = [
    { name: 'Segment 1', icon: ':joy:' },
    { name: 'Segment 2', icon: ':dog:' },
  ];

  list: DialogData[] = [];

  constructor(private matDialog: MatDialog) {}

  addSegment() {
    const dialog = this.matDialog.open(AddCardModalComponent);
    dialog.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.segments.push(result);
      }
    });
  }

  addTable() {
    const dialogRef = this.matDialog.open(TableComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.list.push(result);
      }
    });
  }
}
