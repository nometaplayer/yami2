import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mdp-oublier',
  templateUrl: 'mdp-oublier.html',
})
export class MdpOublierPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MdpOublierPage');
  }

  enArriere(){
    this.navCtrl.push(LoginPage);
  }

  

}
