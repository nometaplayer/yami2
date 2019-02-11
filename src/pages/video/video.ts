import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';



@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  
  galleryType='grille';
  value: string;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController) {
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
}
