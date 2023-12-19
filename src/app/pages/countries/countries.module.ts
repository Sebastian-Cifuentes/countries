import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./all-countries/all-countries.module').then(m => m.AllCountriesModule),
      },
      {
        path: 'new',
        loadChildren: () => import('./new-country/new-country.module').then(m => m.NewCountryModule),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class CountriesModule { }
