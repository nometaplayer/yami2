import { VideovraiPage } from './../pages/videovrai/videovrai';
import { LoginPage } from './../pages/login/login';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IntroPage } from '../pages/intro/intro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { IonicStorageModule } from '@ionic/storage';
import { AbonnementPage } from '../pages/abonnement/abonnement';
import { CguPage } from '../pages/cgu/cgu';
import { ConseilPage } from '../pages/conseil/conseil';
import { ContactPage } from '../pages/contact/contact';
import { FlyerPage } from '../pages/flyer/flyer';
import { GaleriePage } from '../pages/galerie/galerie';
import { NotificationPage } from '../pages/notification/notification';
import { ParametresPage } from '../pages/parametres/parametres';
import { StatsPage } from '../pages/stats/stats';
import { Facebook } from '@ionic-native/facebook';
import { RecetteService } from '../pages/services/recette.services';
import { RecettePage } from '../pages/galerie/recette/recette';
import { MdpOublierPage } from '../pages/mdp-oublier/mdp-oublier';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { VideoPage } from '../pages/video/video';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    LoginPage,
    RegisterPage,
    AbonnementPage,
    CguPage,
    ConseilPage,
    ContactPage,
    FlyerPage,
    GaleriePage,
    HomePage,
    ParametresPage,
    StatsPage,
    RecettePage,
    NotificationPage,
    MdpOublierPage,
    VideoPage,
    VideovraiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ionicGalleryModal.GalleryModalModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    LoginPage,
    RegisterPage,
    AbonnementPage,
    CguPage,
    ConseilPage,
    ContactPage,
    FlyerPage,
    GaleriePage,
    HomePage,
    ParametresPage,
    StatsPage,
    RecettePage,
    NotificationPage,
    MdpOublierPage,
    VideoPage,
    VideovraiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    RecetteService,
    Http,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    }
  ]
})
export class AppModule {}
