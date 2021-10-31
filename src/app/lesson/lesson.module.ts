import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDayComponent } from './first-day/first-day.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { LessonComponent } from './lesson.component';

@NgModule({
  declarations: [FirstDayComponent, SecondDayComponent, LessonComponent],
  imports: [CommonModule],
  exports: [LessonComponent],
})
export class LessonModule {}
