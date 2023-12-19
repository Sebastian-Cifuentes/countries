import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Country } from '../interface/country';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private api = `${environment.apiUrl}/countries`

  constructor(
    private _http: HttpClient
  ) { }

  async getAll() {
    return await lastValueFrom(this._http.get<Country[]>(`${this.api}`));
  }

  async create(country: Country) {
    return await lastValueFrom(this._http.post<Country>(`${this.api}`, country));
  }

  async delete(id: string) {
    return await lastValueFrom(this._http.delete(`${this.api}/${id}`));
  }

}
