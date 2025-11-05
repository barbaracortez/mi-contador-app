import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})

export class ContadorComponent {

  numero: number = 0;

  aumentar(){
    this.numero++;
  }
  disminuir(){
    this.numero--;
  }
  reiniciar(){
    this.numero = 0
  }

}
