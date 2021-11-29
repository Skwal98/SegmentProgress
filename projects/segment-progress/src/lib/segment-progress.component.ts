import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('flyIn', [
      transition('* => *', [style({ width: '0' }), animate(500)]),
    ]),
  ],
  templateUrl: 'segment-progress.component.html',
  styles: [
    `
      :host {
        width: 300px;
        height: 5px;
        display: block;
        position: relative;
        overflow: hidden;
      }

      div {
        height: 100%;
        width: 100%;
        display: inline-block;
        position: absolute;
        border-radius: 3px;
      }

      .default {
        background-color: lightgray;
      }

      .successful {
        background-color: lightgreen;
      }

      .error {
        background-color: darkred;
      }
    `,
  ],
})
export class SegmentProgressComponent {
  oldType: string = 'default';
  type: string = 'default';

  constructor(private _cd: ChangeDetectorRef) {}

  toggle() {
    if (this.oldType == this.type) {
      if (this.type === 'default') {
        this.type = 'successful';
      } else if (this.type == 'successful') {
        this.type = 'error';
      } else {
        this.type = 'default';
      }
    }
  }

  endAnimation() {
    this.oldType = this.type;
    this._cd.detectChanges();
  }
}
