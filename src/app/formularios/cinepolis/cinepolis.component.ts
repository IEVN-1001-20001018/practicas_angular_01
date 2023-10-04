import { Component } from '@angular/core';
interface tarjetaCine{
  valor:number; 
  nombre:string;  
}

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string=""; 
  cantidad_personas:number=0; 
  precio_boleto:number=12; 
  cantidad_boleto:number=0; 
  res:number=0; 
  tarjeta:number=0; 
  msj:string=""; 

  tarjetaCineco: tarjetaCine[]=[
    {
      valor:1, 
      nombre:"Si"
    }, 
    {
      valor:2, 
      nombre:"No"
    }
  ]; 

  compra(){
    const max = 7*this.cantidad_personas; 
    if(this.cantidad_boleto>max){
      this.msj="No se pueden comprar más de 7 boletos por persona"; 
      this.res = 0; 
      let name = ""; 
      this.nombre = name; 
    } else{
      if(this.cantidad_boleto==3 || this.cantidad_boleto==4 || this.cantidad_boleto==5){
        if(this.tarjeta==1){
          const res = ((this.cantidad_boleto)*this.precio_boleto)-(((this.cantidad_boleto))*(this.precio_boleto)/(100*0.10))
          const res2 = ((res)/(100*0.10))
          this.res = res-res2;
          this.msj="¡Boletos comprados!"
        } else {
          const res = ((this.cantidad_boleto)*this.precio_boleto)-(((this.cantidad_boleto))*(this.precio_boleto)/(100*0.10))
          this.res = res; 
          this.msj="¡Boletos comprados!"
          }
        } else if(this.cantidad_boleto>5){
          if(this.tarjeta==1){
            const res = (((this.cantidad_boleto)*this.precio_boleto)- (((this.cantidad_boleto))*(this.precio_boleto)*(0.15)))
            const res2 = ((res)*(0.10))
            this.res = res - res2;
            this.msj = "¡Boletos comprados!"
        } else{
          const res = (((this.cantidad_boleto)*this.precio_boleto)- (((this.cantidad_boleto))*(this.precio_boleto)*(0.15)))
          this.res = res; 
          this.msj = "¡Boletos comprados!"
          } 
        }else {
          if(this.tarjeta=1){
            const res = (((this.cantidad_boleto)*this.precio_boleto))
            const res2 = ((res)/(100*0.10))
            this.res = res-res2; 
            this.msj="¡Boletos comprados!"
          } else {
            const res = (((this.cantidad_boleto)*this.precio_boleto))
            this.res = res; 
            this.msj="¡Boletos comprados!"
          }
      }
    }
  }
}
