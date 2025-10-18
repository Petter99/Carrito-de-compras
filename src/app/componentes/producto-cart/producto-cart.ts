import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './producto-cart.html',
  styleUrl: './producto-cart.css',
  imports: [CommonModule]
})
export class Cart {
  @Input() items: string[] = [];
}
