import { Component } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {

  countries: Country[] = [];

  constructor(
    private _countriesService: CountriesService
  ) {}

  async ngOnInit() {
    console.log('object');
    await this.getAll();
  }

  async getAll() {
    this.countries = await this._countriesService.getAll();
  }

}
