import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: ['./images-viewer.component.sass'],
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
}
