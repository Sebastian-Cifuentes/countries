import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() country!: Country;
  @Output() onchangecountries: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _countriesService: CountriesService
  ) {}

  async delete(id: string) {
    await this._countriesService.delete(id);
    this.onchangecountries.emit(true);
  }

}
