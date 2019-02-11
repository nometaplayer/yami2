import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideovraiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videovrai',
  templateUrl: 'videovrai.html',
})
export class VideovraiPage {

  vid= [
    {link:'https://www.youtube.com/embed/oavMtUWDBTM', title:"Trololol"} ,
    {link:'https://www.youtube.com/embed/oavMtUWDBTM', title:"trololo2"} ,
    {link:"https://www.youtube.com/embed/dHFHZUPvIBc", title:"Haroun"} ,
  ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private dom: DomSanitizer) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
  sanitize(video){
    return this.dom.bypassSecurityTrustResourceUrl(video);
  }
}
