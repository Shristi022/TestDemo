import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardModalComponent } from './app-add-card-modal/app-add-card-modal.component';
import { TableComponent } from './table/table.component';

export class DialogData {
  name: string='';
  color: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  segments: string[] = ['Segment 1', 'Segment 2'];

  list: DialogData[] = [{ name: 'System', color: 'red' }];

  constructor(private matDialog: MatDialog) {}

  addSegment() {
    const dialog = this.matDialog.open(AddCardModalComponent);
    dialog.afterClosed().subscribe((result) => {
      this.segments.push(result.name);
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
