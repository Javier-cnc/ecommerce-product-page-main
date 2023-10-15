import { Component, Input } from '@angular/core';
import { ShoppingCartItem } from 'src/app/models/shoppingCartItem.model';

@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.sass'],
})
export class ProductCartViewComponent {
  @Input('model')
  model: ShoppingCartItem = new ShoppingCartItem();

  get TotalPrice(): number {
    return this.model.product.price * this.model.quantity;
  }
}
