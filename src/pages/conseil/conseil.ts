import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'page-conseil',
  templateUrl: 'conseil.html',
})
export class ConseilPage {

  num: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController,
              private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConseilPage');
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.num=barcodeData.text;
    });
  }

}
