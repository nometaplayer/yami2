import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-abonnement',
  templateUrl: 'abonnement.html',
})
export class AbonnementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbonnementPage');
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
