import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  newProductAdded: ReplaySubject<ShoppingCartItem> =
    new ReplaySubject<ShoppingCartItem>();

  productRemoved: ReplaySubject<ShoppingCartItem> =
    new ReplaySubject<ShoppingCartItem>();

  shoppingCartItems: ShoppingCartItem[] = [];

  constructor() {}

  addNewItem(productItem: Product, productQuantity: number) {
    // check if the new product already exist in the cart
    var index = this.shoppingCartItems.findIndex(
      (cartItem) => cartItem.product._id === productItem._id
    );

    var itemToReturn: ShoppingCartItem = new ShoppingCartItem();
    if (index === -1) {
      // cart new entry in the cart collection
      itemToReturn = {
        product: productItem,
        quantity: productQuantity,
      };

      this.shoppingCartItems.push(itemToReturn);
    } else {
      // add the new quantity to the already existing quantity of the product in the shopping cart
      this.shoppingCartItems[index].quantity += productQuantity;
      itemToReturn = this.shoppingCartItems[index];
    }
    // notify the rest of the application about the new item in the shopping cart
    this.newProductAdded.next(itemToReturn);
  }

  removeItemByProductId(productId: string) {
    // remove the item corresponding to the product id
    var index = this.shoppingCartItems.findIndex(
      (item) => item.product._id === productId
    );
    let itemRemoved = this.shoppingCartItems.splice(index, 1)[0];

    // notify the rest of the application about the item being removed
    this.productRemoved.next(itemRemoved);
  }

  checkout() {
    this.shoppingCartItems = [];
  }
}
