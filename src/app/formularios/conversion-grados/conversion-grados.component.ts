import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion-grados',
  templateUrl: './conversion-grados.component.html',
  styleUrls: ['./conversion-grados.component.css']
})
export class ConversionGradosComponent {
  grados:number=0;
  resultado:number=0; 

  conversion(){
    if(document.querySelector('input[id="flexRadioDefault1"]:checked')){
      this.conversion1(); 
    }else{
      this.conversion2(); 
    }
  }
  conversion1(){
    this.resultado = (this.grados*9/5) +32; 
  }

  conversion2(){
    this.resultado = (this.grados -32) * 5/9; 
  }
}
