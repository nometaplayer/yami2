import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DomSanitizer } from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  private images: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    for (let i = 1; i < 5; i++) {
      this.images.push({
        url: '/src/assets/imgs/${i}.png'
      });
    }
    this.images[0].title = 'test';
    this.images[1].title = 'Use Firebase Storage';
  }

  openGallery() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: 0,
      closeIcon: 'back'
    });
    modal.present();
  }

}
