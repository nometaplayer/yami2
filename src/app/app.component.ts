import { NotificationPage } from './../pages/notification/notification';
import { LoginPage } from './../pages/login/login';
import { GaleriePage } from './../pages/galerie/galerie';
import { ContactPage } from './../pages/contact/contact';
import { ConseilPage } from './../pages/conseil/conseil';
import { CguPage } from './../pages/cgu/cgu';
import { AbonnementPage } from './../pages/abonnement/abonnement';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FlyerPage } from '../pages/flyer/flyer';
import { ParametresPage } from '../pages/parametres/parametres';
import { StatsPage } from '../pages/stats/stats';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Intro', component: IntroPage },
      { title: 'Abonnement', component: AbonnementPage },
      { title: 'CGU', component: CguPage },
      { title: 'Conseil', component: ConseilPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Flyer', component: FlyerPage },
      { title: 'Galerie', component: GaleriePage },
      { title: 'Login', component: LoginPage },
      { title: 'Parametres', component: ParametresPage },
      { title: 'Stats', component: StatsPage },
      { title: 'Notification', component : NotificationPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
