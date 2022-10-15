import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dish: Idishes = {} as Idishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart() {
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
