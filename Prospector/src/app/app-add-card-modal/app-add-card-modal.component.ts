import {Component, CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';
@Component({
  selector: 'app-add-card-modal',
  templateUrl: './app-add-card-modal.component.html',
})
export class AddCardModalComponent implements OnInit {
  showemoji:boolean=false;
  emojiSelected:string="";
  constructor(public dialogRef: MatDialogRef<AddCardModalComponent>) { }
  segmentForm = new FormGroup({
    name: new FormControl(''),
    icon: new FormControl(''),
    description: new FormControl('')
  });
  addEmoji(event:any){
    this.emojiSelected=event.emoji.colons;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  onAddSegemnt(){
    let data=new DialogData();
    data.name = this.segmentForm.controls['name'].value;
    data.icon = this.emojiSelected;
    data.description = this.segmentForm.controls['description'].value;
    this.dialogRef.close(data);  
  }
  ngOnInit(): void {
  }

}