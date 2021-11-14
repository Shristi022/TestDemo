import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  showemoji:boolean=false;
  emojiSelected:string="";
  tableForm = new FormGroup({
    name: new FormControl(''),
    icon: new FormControl(''),
    color: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<TableComponent>) { }

  ngOnInit(): void {
  }
  addEmoji(selectedEmoji:any){
    this.emojiSelected=selectedEmoji.emoji.colons;
  }
  onAddTable(){
    let data=new DialogData();
    data.name = this.tableForm.controls['name'].value;
    data.icon = this.emojiSelected;
    data.color = this.tableForm.controls['color'].value;
    this.dialogRef.close(data);  
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
  
}
