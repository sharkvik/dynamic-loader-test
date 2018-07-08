import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'nvm-lazy-instance',
  templateUrl: './lazy-instance.component.html',
  styleUrls: ['./lazy-instance.component.less']
})
export class LazyInstanceComponent {

  constructor(private _sharedService: SharedService) {}
  public get counter(): number {
    return this._sharedService.counter;
  }

  increment() {
    this._sharedService.increment();
  }

}
