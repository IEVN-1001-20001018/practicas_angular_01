import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConversionGradosComponent } from './formularios/conversion-grados/conversion-grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxbComponent } from './formularios/multiplicacion-axb/multiplicacion-axb.component';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionGradosComponent,
    MultiplicacionAxbComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
