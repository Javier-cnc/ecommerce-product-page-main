import { HostListener, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private getScreenWidth: number = 0;
  private getScreenHeight: number = 0;

  // #region Small screen mode active
  public smallScreenModeActive: boolean = false;
  private smallScreenModeActiveChanged: ReplaySubject<boolean> =
    new ReplaySubject<boolean>();

  private set SmallScreenModeActive(value: boolean) {
    if (this.smallScreenModeActive != value) {
      this.smallScreenModeActive = value;
      // notify the rest of the application about this change
      this.smallScreenModeActiveChanged.next(value);
    }
  }
  get SmallScreenModeActiveChanged(): Observable<boolean> {
    return this.smallScreenModeActiveChanged;
  }
  // #endregion

  // #region left side panel
  private leftSidePanelVisible: boolean = false;
  public leftSidePanelVisibleChanged: ReplaySubject<boolean> =
    new ReplaySubject<boolean>();
  public set LeftSidePanelVisible(value: boolean) {
    if (this.leftSidePanelVisible != value) {
      this.leftSidePanelVisible = value;

      // notify the rest of the application about this change
      this.leftSidePanelVisibleChanged.next(value);
    }
  }
  public get LeftSidePanelVisible(): boolean {
    return this.leftSidePanelVisible;
  }

  // #endregion
  constructor() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth < 750) {
      this.SmallScreenModeActive = true;
    } else {
      this.SmallScreenModeActive = false;
    }
  }

  toggleLeftSidePanelVisibility() {
    this.LeftSidePanelVisible = !this.LeftSidePanelVisible;
    console.log('left side panel toggled!!!');
    console.log(`value: ${this.leftSidePanelVisible}`);
  }
}
