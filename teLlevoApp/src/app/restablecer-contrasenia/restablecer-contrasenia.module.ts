import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';

import { RestablecerContraseniaPageRoutingModule } from './restablecer-contrasenia-routing.module';
import {MatInputModule} from '@angular/material/input';
import { RestablecerContraseniaPage } from './restablecer-contrasenia.page';
//modulos importados
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    IonicModule,
    RestablecerContraseniaPageRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule 
    
  ],
  declarations: [RestablecerContraseniaPage]
})
export class RestablecerContraseniaPageModule {}
