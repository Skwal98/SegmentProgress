import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SegmentProgressComponent } from './segment-progress.component';

@NgModule({
  declarations: [SegmentProgressComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [SegmentProgressComponent],
})
export class SegmentProgressModule {}
