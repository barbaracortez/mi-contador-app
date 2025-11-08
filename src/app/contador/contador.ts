import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})

export class ContadorComponent {

  numero = signal(0);
  paso = signal(1);

  min = signal(0);
  max = signal(100);

  aumentar(){
    this.numero.update(n =>{
      const res = n + this.paso();
      return res > this.max() ? this.max() : res;
    });
  }

  disminuir(){
    this.numero.update(n =>{
      const res = n - this.paso();
      return res < this.min() ? this.min() : res;
    
    });
  }

  reiniciar(){
    this.numero.set(0)
  }

  actualizarPaso(valor: string){
    const n = Number(valor);
    if(!isNaN(n)) this.paso.set(n)
  }
}
