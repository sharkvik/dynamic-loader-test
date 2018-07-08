import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  SystemJsNgModuleLoader,
  Injector,
  NgModuleFactory,
  Input
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'nvm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {
  @Input() route: string;

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private loader: SystemJsNgModuleLoader, private inj: Injector) { }

  ngOnInit() {
    if (_.isEmpty(this.route)) {
      return;
    }
    this.loader.load(this.route).then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.container.createComponent(compFactory);
    });
  }
}
