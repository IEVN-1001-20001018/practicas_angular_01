import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-axb',
  templateUrl: './multiplicacion-axb.component.html',
  styleUrls: ['./multiplicacion-axb.component.css']
})
export class MultiplicacionAxbComponent {
  num1:number=0; 
  num2:number=0; 
  res:number=0; 
  suma:number=0; 
  texto:string=""; 

  mult(){
    this.texto=""; 
    let b = this.num2; 
    for(let i = 1; i < this.num1; i++){
      b = b + this.num2;
      this.texto += this.num2.toString() + " + ";  
    }
    this.texto += this.num2.toString() + " = " + b;
  }
}
