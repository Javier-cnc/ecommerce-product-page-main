import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';

import { SERVER_URL } from 'src/app/global.variables';

@Component({
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: [
    './images-viewer.component.sass',
    './small_screen-images-viewer.component.sass',
  ],
})
export class ImagesViewerComponent {
  @Input('images')
  images: string[] | undefined = [];

  @Output('clicked')
  clicked: EventEmitter<void> = new EventEmitter();

  @Input('navigationButtonVisible')
  navigationButtonVisible: boolean = false;

  // define the position of the selected item in the elements to show
  selectionIndex: number = 0;

  setSelectedIndex(index: number) {
    this.selectionIndex = index;
  }

  imageClicked() {
    if (this.getScreenWidth < 750) {
      return;
    }
    this.clicked.emit();
  }
  goBack() {
    if (this.selectionIndex > 0) this.selectionIndex--;
  }
  goForward() {
    if (this.images === undefined) return;

    if (this.selectionIndex < this.images?.length - 1) {
      this.selectionIndex++;
    }
  }

  // return true if the selectionIndex point to the last image in the images collection to show
  get IsLastElement(): boolean {
    if (this.images === undefined) {
      return false;
    }

    return this.selectionIndex === this.images?.length - 1;
  }
  // returns true if the selectionIndex points to the first image of the images collection
  get IsFirstElement(): boolean {
    if (this.images === undefined) {
      return false;
    }
    return this.selectionIndex === 0;
  }
  private getScreenWidth: number = 0;
  private getScreenHeight: number = 0;

  public smallScreenModeActive: boolean = false;

  constructor() {}

  get ServerUrl(): string {
    return SERVER_URL;
  }
}
