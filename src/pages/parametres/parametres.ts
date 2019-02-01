import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { CguPage } from '../cgu/cgu';
import { NotificationPage } from '../notification/notification';


@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {
  event: string;
  num: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametresPage');
  }

  setpage(num){
    if(num==0)this.navCtrl.push(IntroPage);
    if(num==1)this.navCtrl.push(CguPage);
    if(num==2)this.navCtrl.push(NotificationPage);

  }
  doRefresh(event){
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
