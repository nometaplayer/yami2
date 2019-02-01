import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
