import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})

export class ContadorComponent {

  numero= signal(0);

  aumentar(){
    this.numero.update(n => n + 1)
  }
  disminuir(){
    this.numero.update(n => n - 1)
  }
  reiniciar(){
    this.numero.set(0)
  }

}
