import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { ImagesViewerComponent } from './Components/images-viewer/images-viewer.component';
import { ProductCartViewComponent } from './Components/product-cart-view/product-cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImagesViewerComponent,
    ProductCartViewComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
