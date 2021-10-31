import { LessonModule } from './lesson/lesson.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ComponentdemoComponent } from './componentdemo/componentdemo.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent, DemoComponent, ComponentdemoComponent],
  imports: [TestModule, BrowserModule, AppRoutingModule, LessonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
