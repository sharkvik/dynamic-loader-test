import { Component, OnInit, ViewChild, ViewContainerRef, SystemJsNgModuleLoader, Injector, NgModuleFactory } from '@angular/core';

@Component({
  selector: 'nvm-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less']
})
export class DynamicComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private loader: SystemJsNgModuleLoader, private inj: Injector) { }

  ngOnInit() {
    this.loader.load('./lazy/lazy.module#LazyModule').then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.container.createComponent(compFactory);
    });
  }

}
