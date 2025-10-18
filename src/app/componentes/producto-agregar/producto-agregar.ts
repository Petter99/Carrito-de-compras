import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './producto-agregar.html',
  styleUrl: './producto-agregar.css',
  imports: [FormsModule]
})
export class Agregar {
  nombre: string = '';
  @Output() agregar = new EventEmitter<string>();

  enviar() {
    const limpio = this.nombre.trim();
    if(!limpio) return;
    this.agregar.emit(limpio);
    this.nombre = '';
  }
}
