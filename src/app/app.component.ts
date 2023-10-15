import { Component, HostListener } from '@angular/core';
import { RepositoryService } from './services/repository.service';
import { Product } from './models/product.model';
import { ShoppingCartService } from './services/shoppingCart.service';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass', './small_screen-app.component.sass'],
})
export class AppComponent {
  title = 'starting-project';
  productModel: Product | null = null;
  isLayerVisible: boolean = false;
  smallScreenModeActive: boolean = false;
  leftSidePanelVisible: boolean = false;

  // defines the quantity of the current product to order by the client
  productQuantityToOrder: number = 0;

  constructor(
    private repo: RepositoryService,
    private cart: ShoppingCartService,
    private backgroundService: BackgroundService
  ) {
    // set initial value of smallScreenModeActive
    this.smallScreenModeActive = backgroundService.smallScreenModeActive;
    // hook to the event that notifies about the change of smallScreenModeActive
    backgroundService.SmallScreenModeActiveChanged.subscribe({
      next: (value) => {
        this.smallScreenModeActive = value;
      },
    });

    // set initial value of left side panel visibility
    this.leftSidePanelVisible = this.backgroundService.LeftSidePanelVisible;
    // subscribe to leftsidepanelvisibility event
    this.backgroundService.leftSidePanelVisibleChanged.subscribe({
      next: (value) => {
        this.leftSidePanelVisible = value;
      },
    });

    // create a dummy id
    let dummyId = 0;

    // load the product for the data of the page
    this.repo.getProductById(dummyId).subscribe({
      next: (response) => {
        this.productModel = response;
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
    this.isLayerVisible = false;
  }

  showLayer() {
    this.isLayerVisible = true;
  }
  addToCart() {
    if (this.productQuantityToOrder === 0) {
      return;
    }

    if (this.productModel != null) {
      // add the current item to cart
      this.cart.addNewItem(this.productModel, this.productQuantityToOrder);

      // clear the quantity of products to order
      this.productQuantityToOrder = 0;
    }
  }

  // this code has the responsibility to listen for windows resize events and notify
  // the application background service using the checkScreenSize() function
  // *********************************************************************************
  // IMPORTANT: This must be here because this code only executes inside a component, that is why
  // this is not hosted by BackgroundService class
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // execute all the corresponding actions in the background service
    this.backgroundService.checkScreenSize();
  }
}
