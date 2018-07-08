import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderModule } from './loader/loader.module';
import { Constants } from './shared/constants';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule.forRoot(Constants.lazyLoadablePaths)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
