import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-restablecer-contrasenia',
  templateUrl: './restablecer-contrasenia.page.html',
  styleUrls: ['./restablecer-contrasenia.page.scss'],
})

export class RestablecerContraseniaPage  {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit() {
  }

}

