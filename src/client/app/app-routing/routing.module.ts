import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from '../app.component';

const routes: Routes=[
  {path:'', loadChildren: './website.module#WebsiteModule'},
  {path:'admin', loadChildren: './admin.module#AdminModule'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent]
})
export class RoutingModule { }
