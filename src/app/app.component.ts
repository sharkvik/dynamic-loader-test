import { Component } from '@angular/core';
import { Constants } from './shared/constants';

@Component({
  selector: 'nvm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'nvm';
  public displayLazy = false;
  public route: string;
  constructor() {
    this.route = Constants.lazyLoadablePaths[0].loadChildren;
  }
}
