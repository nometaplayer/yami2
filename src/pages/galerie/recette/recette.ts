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
  }

  constructor(public navParams: NavParams) { }
  
  ngOnInit(){
    this.recette = this.navParams.get('recette');
  }
}
