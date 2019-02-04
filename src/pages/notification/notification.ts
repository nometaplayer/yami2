import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
