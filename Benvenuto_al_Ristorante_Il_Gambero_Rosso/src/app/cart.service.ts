import { Injectable } from '@angular/core';
import { Idishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Idishes[] = [];
  
  constructor() { }

  addToCart(dish: Idishes) {
    this.items.push(dish);
  }

  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }
}
