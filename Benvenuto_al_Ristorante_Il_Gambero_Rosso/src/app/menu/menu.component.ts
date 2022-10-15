import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Idishes [] = dishes;
  dish: Idishes = {} as Idishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  
  addToCart(){
    window.alert('Your dish has been added to the cart!');
    this.cartService.addToCart(this.dish);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishId'];
      this.dish = dishes[this.id];
    });
  }

}
