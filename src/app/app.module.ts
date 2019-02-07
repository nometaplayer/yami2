import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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
import { ImagePage } from '../pages/image/image';
import { VideoPage } from '../pages/video/video';
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
    ImagePage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    ImagePage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    RecetteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
