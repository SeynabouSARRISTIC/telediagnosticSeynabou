import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {  HttpClientModule } from '@angular/common/http';
import { ServicesProvider } from '../providers/auth-service/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisualisationDuParcPage} from "../pages/visualisation-du-parc/visualisation-du-parc";
import {SouvenirDeMoi} from "../providers/souvenirService/souvenirDeMoi";
import {VisualisationDeLaBoxePage} from "../pages/visualisation-de-la-boxe/visualisation-de-la-boxe";
import {DevicePage} from "../pages/device/device";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualisationDuParcPage,
    VisualisationDeLaBoxePage,
    DevicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualisationDuParcPage,
    VisualisationDeLaBoxePage,
    DevicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider,
    SouvenirDeMoi
  ]
})
export class AppModule {}
