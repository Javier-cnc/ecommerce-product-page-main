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

  // define the position of the selected item in the elements to show
  selectionIndex: number = 0;

  setSelectedIndex(index: number) {
    this.selectionIndex = index;
  }

  imageClicked() {
    this.clicked.emit();
  }
}
