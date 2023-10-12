import { Component } from '@angular/core';
import { RepositoryService } from './services/repository.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'starting-project';
  productModel$: Product | null = null;
  isLayerVisible: boolean = false;

  // defines the quantity of the current product to order by the client
  productQuantityToOrder: number = 0;

  constructor(private repo: RepositoryService) {
    // create a dummy id
    let dummyId = 0;

    // load the product for the data of the page
    this.repo.getProductById(dummyId).subscribe({
      next: (response) => {
        this.productModel$ = response;
      },
      error: (err) => {
        // notify the user about the error
        console.log('An error occurred retreiving data from the server!!!');
      },
      complete: () => {},
    });
  }

  decreaseQuantity() {
    if (this.productQuantityToOrder > 0) {
      this.productQuantityToOrder--;
    }
  }

  increaseQuantity() {
    this.productQuantityToOrder++;
  }

  hideLayer(event: any) {
    if (!event.clickHandled) this.isLayerVisible = false;
  }

  showLayer() {
    this.isLayerVisible = true;
  }

  clickTesting(event: any) {
    event.clickHandled = true;
  }
}
