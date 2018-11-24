import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private _counter = 0;
	constructor() {}
	public increment() {
		this._counter++;
	}

	public get counter(): number {
		return this._counter;
	}
}
