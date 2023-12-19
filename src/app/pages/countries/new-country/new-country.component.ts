import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.scss']
})
export class NewCountryComponent {

  form!: FormGroup;

  constructor(
    private _countriesService: CountriesService
  ) {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      countryName: new FormControl('', Validators.required),
      population: new FormControl('', Validators.required),
      capital: new FormControl('', Validators.required),
      continentName: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
  }

  async save() {
    try {
      if (this.form.invalid) return;
      const country = {...this.form.value};
      await this._countriesService.create(country);
      this.form.reset();
    } catch (error) {
      console.log(error);
    }
  }

}
