import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyInstanceComponent } from './lazy-instance/lazy-instance.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyInstanceComponent],
  entryComponents: [LazyInstanceComponent]
})
export class LazyModule {
  static entry = LazyInstanceComponent;
}
