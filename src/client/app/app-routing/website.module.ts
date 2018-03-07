import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path: '', component: ContactusComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ContactusComponent, DialogContactComponent]
})
export class WebsiteModule { }
