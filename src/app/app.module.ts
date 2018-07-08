import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Constants } from './shared/constants';
import { NvmLoaderModule } from 'nvm-loader';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvmLoaderModule.forRoot(Constants.lazyLoadablePaths)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
