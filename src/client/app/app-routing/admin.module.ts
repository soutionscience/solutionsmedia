import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path:'', component: AdminAreaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAreaComponent]
})
export class AdminModule { }
