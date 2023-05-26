import { Component } from '@angular/core';

@Component({
  selector: 'app-shoping-cart-item',
  templateUrl: './shoping-cart-item.component.html',
  styleUrls: ['./shoping-cart-item.component.css']
})
export class ShopingCartItemComponent {
  cart-item: cart-item={
    imageURL:"headphones.jpg"
    name:"Auricular"
    price:50.000
  }


}
