import { Component } from '@angular/core';
import { Constants } from './shared/constants';
import { SharedService } from './shared.service';

@Component({
	selector: 'nvm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'nvm';
	public displayLazy = false;
	public route: string;
	public get counter() {
		return this._sharedService.counter;
	}
	constructor(private _sharedService: SharedService) {
		this.route = Constants.lazyLoadablePaths[0].loadChildren;
	}
}
