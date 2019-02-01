import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage implements OnInit {

  recette: {
    name: string,
    description: string
  };

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettePage');
  }
  ngOnInit(){
    this.recette = this.navParams.get('recette');
  }

}
