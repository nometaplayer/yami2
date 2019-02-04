import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-flyer',
  templateUrl: 'flyer.html',
})
export class FlyerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlyerPage');
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
