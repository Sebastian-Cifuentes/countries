import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountriesComponent } from './all-countries.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AllCountriesComponent,
  }
];

@NgModule({
  declarations: [
    AllCountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class AllCountriesModule { }
