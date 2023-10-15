export class Product {
  // item id
  id: string;
  // define the name of the product
  name: string;
  // define the list of images of the product
  images: string[];
  // detailed description of the product
  description: string;
  // the current price of the product
  price: number;
  // some old price of the product indicating about some new disscount
  oldPrice: number;

  constructor() {
    this.id = Math.round(Math.random() * 1000000).toString();
    this.name = '';
    this.images = [];
    this.description = '';
    this.price = 0;
    this.oldPrice = 0;
  }
}
