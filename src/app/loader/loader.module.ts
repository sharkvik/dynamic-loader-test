import { NgModule, SystemJsNgModuleLoader, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { provideRoutes, Route } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  declarations: [LoaderComponent]
})
export class LoaderModule {
  static forRoot(lazyRoutes: Route[]): ModuleWithProviders {
    return {
      ngModule: LoaderModule,
      providers: [
        SystemJsNgModuleLoader,
        provideRoutes(lazyRoutes),
      ]
    };
  }
}
