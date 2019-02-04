import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage implements OnInit {

  recette: {
    name: string,
    description: string
  }

  constructor(public navParams: NavParams,
              public navCtrl: NavController) { }
  
  ngOnInit(){
    this.recette = this.navParams.get('recette');

  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
