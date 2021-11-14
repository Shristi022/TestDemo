import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AddCardModalComponent } from './app-add-card-modal/app-add-card-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,AddCardModalComponent,
    TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PickerModule,
    FormsModule,
    ReactiveFormsModule,
    EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}