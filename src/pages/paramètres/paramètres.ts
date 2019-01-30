import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { CguPage } from '../cgu/cgu';
import { NotificationPage } from '../notification/notification';


@Component({
  selector: 'page-paramètres',
  templateUrl: 'paramètres.html',
})
export class ParamètresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamètresPage');
  }

  setpage(num){
    if(num==0)this.navCtrl.push(IntroPage);
    if(num==1)this.navCtrl.push(CguPage);
    if(num==2)this.navCtrl.push(NotificationPage);

  }

}
