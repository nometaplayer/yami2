import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Recette } from '../../models/Recette';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'page-galerie',
  templateUrl: 'galerie.html',
})
export class GaleriePage {

  recette$ = new Subject<Recette[]>();
  recetteList: Recette[]=[
    {
      name: 'Gâteau au chocolat-poire',
      description: 'Il y a du chocolat et de la poire',
      isOn: true,
      image:'d'
    },
    {
      name: 'Crèpe Bretonne',
      description: 'Une bonne crèpe traditionnelle',
      isOn: true,
      image:''
    },
    {
      name: 'Tarte au citron',
      description: 'La tarte au citron comme on l\'aime',
      isOn: true,
      image:''
    },
    {
      name: 'Mousse au chocolat',
      description: 'Bien épaisse, c\'est cool',
      isOn: true,
      image:''
    }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriePage');
  }
  onLoadRecette(recette: {name: string, description: string}) {
    this.navCtrl.push(GaleriePage, {recette: recette});
  }

}
