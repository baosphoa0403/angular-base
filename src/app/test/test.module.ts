import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { BaoComponent } from './bao/bao.component';

@NgModule({
  declarations: [TestComponent, BaoComponent],
  imports: [CommonModule],
  exports: [TestComponent, BaoComponent], // phải export cái componet , bước 2 import module zo app module
})
export class TestModule {}
