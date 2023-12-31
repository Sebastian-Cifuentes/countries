import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  private errorMap: { [key: string]: (c: FormControl | AbstractControl, name: string) => string } = {
    'required': (c: FormControl | AbstractControl, name: string) => `${name} es requerido`
  }

  public mapErrors(control: FormControl | AbstractControl, name: string): string[] {
    try {
      return Object.keys(control.errors || {})
        .map(key => this.errorMap[key](control, name));
    } catch (error) {
      return [];
    }
  }

  errorControl(control: FormControl | AbstractControl): Boolean {
    return control?.invalid && (control?.dirty || control?.touched)
  }
}
