import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-cgu',
  templateUrl: 'cgu.html',
})
export class CguPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl : MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CguPage');
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
