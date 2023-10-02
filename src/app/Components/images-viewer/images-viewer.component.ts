import { Component } from '@angular/core';

@Component({
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: ['./images-viewer.component.sass'],
})
export class ImagesViewerComponent {
  // define a dummy list of elements to test the functionality of the current component
  testingElementsToShow: number[] = [1, 2, 3, 4];

  // define the position of the selected item in the elements to show
  selectionIndex: number = 0;

  setSelectedIndex(index: number) {
    this.selectionIndex = index;
  }
}
