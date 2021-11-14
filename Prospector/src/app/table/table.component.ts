import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableForm = new FormGroup({
    name: new FormControl(''),
    icon: new FormControl(''),
    color: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<TableComponent>) { }

  ngOnInit(): void {
  }
  onAddTable(){
    this.dialogRef.close(this.tableForm.value);
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
  
}
