import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { ConversionGradosComponent } from './formularios/conversion-grados/conversion-grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxbComponent } from './formularios/multiplicacion-axb/multiplicacion-axb.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionGradosComponent,
    MultiplicacionAxbComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, BrowserAnimationsModule, 
    MatInputModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
