import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, ViewController } from 'ionic-angular';

import { RecettePage } from './recette/recette';
import { RecetteService } from '../services/recette.services';


@Component({
  selector: 'page-galerie',
  templateUrl: 'galerie.html',
})
export class GaleriePage implements OnInit {

  recettePage= RecettePage;

  recette=[];
  items=[];

  sliderConfig={
    slidesPerView: 1.6,
    spaceBetwween: 10,
    centeredSlides: true
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController,
              public viewCtrl: ViewController,
              private recetteService: RecetteService) {
  }


  ngOnInit(){
    this.items = this.recetteService.getProducts();
    this.recette = this.recetteService.getRecette();
  }
  addToRecette(product){
    this.recetteService.addProduct(product);
  }
  openRecette(){
    this.navCtrl.push('Recette');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriePage');
  }
  onLoadRecette(recette: {name: string, description: string}) {
    this.navCtrl.push(RecettePage, {recette: recette});
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
