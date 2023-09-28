import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConversionGradosComponent } from './formularios/conversion-grados/conversion-grados.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionGradosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
