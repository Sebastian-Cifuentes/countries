import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCountryComponent } from './new-country.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NewCountryComponent,
  }
];


@NgModule({
  declarations: [
    NewCountryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NewCountryModule { }
