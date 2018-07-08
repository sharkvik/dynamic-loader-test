import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRoutes } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';

const lazyLoadablePaths = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SystemJsNgModuleLoader,
    provideRoutes(lazyLoadablePaths),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
