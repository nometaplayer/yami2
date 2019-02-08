import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { PhotoViewerOriginal } from '@ionic-native/photo-viewer';


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  img: string;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              private photoViewer: PhotoViewerOriginal) {
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  /* lookImg(value){
    this.photoViewer.show(value,'', {share: true});
  } */
}
