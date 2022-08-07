import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CIConfig, CI_CONFIG } from 'ng-cloudimage-responsive';

const ciConfig: Partial<CIConfig> = {
  token: 'your-token',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CI_CONFIG, useValue: ciConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
