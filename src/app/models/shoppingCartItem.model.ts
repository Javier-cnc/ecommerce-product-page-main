import { Product } from './product.model';

export class ShoppingCartItem {
  product: Product;
  quantity: number;

  constructor() {
    this.product = new Product();
    this.quantity = 0;
  }
}
