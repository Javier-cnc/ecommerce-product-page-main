import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { ImagesViewerComponent } from './Components/images-viewer/images-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ImagesViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
