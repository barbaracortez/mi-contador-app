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

  aumentar(){
    this.numero.update(n => n + this.paso())
  }
  disminuir(){
    this.numero.update(n => n - this.paso())
  }
  reiniciar(){
    this.numero.set(0)
  }

  actualizarPaso(valor: string){
    const numeroPaso = Number(valor);
    if(!isNaN(numeroPaso)) {
      this.paso.set(numeroPaso)
    }
  }

}
