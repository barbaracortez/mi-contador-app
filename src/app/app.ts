import {Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent  } from './contador/contador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ContadorComponent],
  templateUrl: './app.html',
  styleUrls: [ './app.css'],
})

export class App {
  protected readonly title = signal('mi-contador-app')
}
