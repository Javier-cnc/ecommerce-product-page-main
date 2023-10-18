import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ShoppingCartService } from 'src/app/services/shoppingCart.service';
import { RepositoryService } from 'src/app/services/repository.service';
import { ShoppingCartItem } from 'src/app/models/shoppingCartItem.model';
import { BackgroundService } from 'src/app/services/background.service';
import { SERVER_URL } from 'src/app/global.variables';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: [
    './top-bar.component.sass',
    './small_screen-top-bar.component.sass',
  ],
})
export class TopBarComponent {
  // define if the cartDisplay is visible
  cartDisplayVisible: boolean = false;

  smallScreenModeActive: boolean;

  get cartItems(): ShoppingCartItem[] {
    return this.shoppingCartService.shoppingCartItems;
  }
  dummyCounter: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private backgroundService: BackgroundService
  ) {
    shoppingCartService.newProductAdded.subscribe({
      next: (newItem) => {
        // force visual interface to update
        this.dummyCounter++;
      },
      error: (errMessage) => {
        console.log(errMessage);
      },
    });
    shoppingCartService.productRemoved.subscribe({
      next: (productRemoved) => {
        // force the visual interface to update
        this.dummyCounter++;
      },
    });

    // subscribe to screen size change notifications
    this.smallScreenModeActive = this.backgroundService.smallScreenModeActive;
    this.backgroundService.SmallScreenModeActiveChanged.subscribe({
      next: (value) => {
        console.log('function executed');
        this.smallScreenModeActive = value;
      },
    });
  }

  toggleCartDisplayVisibility() {
    // toggle the cart display visibility
    this.cartDisplayVisible = !this.cartDisplayVisible;
  }

  removeItemById(id: string) {
    this.shoppingCartService.removeItemByProductId(id);
  }

  checkoutCart() {
    // remove all the elements from the cart
    this.shoppingCartService.checkout();
  }
  toggleLeftSidePanelVisibility() {
    this.backgroundService.toggleLeftSidePanelVisibility();
  }

  get ServerUrl(): string {
    return SERVER_URL;
  }
}
