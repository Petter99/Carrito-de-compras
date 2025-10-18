import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agregar } from '../producto-agregar/producto-agregar';
import { Cart } from '../producto-cart/producto-cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [CommonModule, Agregar, Cart]
})
export class Home {
  // lista de productos como señales simples
  listaProductos = signal<string[]>([]);
  esCarritoVisible = signal(false);
  aviso = signal('');


  agregarProductoAlCarrito(nombre: string) {
    if (!nombre) return;
    // agregar al array
    this.listaProductos.update((list: string[]) => [...list, nombre]);
    // mostrar mensaje corto
    this.aviso.set('Producto agregado');
    setTimeout(() => this.aviso.set(''), 1500);
  }

  alternarVisibilidadCarrito() {
    this.esCarritoVisible.update((v: boolean) => !v);
  }
}
