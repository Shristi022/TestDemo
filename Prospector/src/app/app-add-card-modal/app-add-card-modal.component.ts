import {Component, CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-card-modal',
  templateUrl: './app-add-card-modal.component.html',
})
export class AddCardModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddCardModalComponent>) { }
  segmentForm = new FormGroup({
    name: new FormControl(''),
    icon: new FormControl(''),
    description: new FormControl('')
  });
  
  closeDialog() {
    this.dialogRef.close();
  }
  onAddSegemnt(){
    this.dialogRef.close(this.segmentForm.value);  
  }
  ngOnInit(): void {
  }

}