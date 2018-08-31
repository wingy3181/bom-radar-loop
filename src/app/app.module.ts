import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BomRadarLoopComponent } from './bom-radar-loop/bom-radar-loop.component';

@NgModule({
  declarations: [
    BomRadarLoopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    BomRadarLoopComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(BomRadarLoopComponent, { injector: this.injector });
    customElements.define('bom-radar-loop', el);
  }
}
