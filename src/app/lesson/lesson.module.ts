import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstDayComponent } from './first-day/first-day.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { LessonComponent } from './lesson.component';
import { DatabindingComponent } from './second-day/databinding/databinding.component';
import { OnewayComponent } from './second-day/databinding/oneway/oneway.component';
import { TwowayComponent } from './second-day/databinding/twoway/twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FirstDayComponent,
    SecondDayComponent,
    LessonComponent,
    DatabindingComponent,
    OnewayComponent,
    TwowayComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [LessonComponent],
})
export class LessonModule {}
