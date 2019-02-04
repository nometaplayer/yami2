import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-conseil',
  templateUrl: 'conseil.html',
})
export class ConseilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConseilPage');
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
