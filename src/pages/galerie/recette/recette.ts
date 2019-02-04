import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.services';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage implements OnInit {

  name: string;

  constructor(public recetteService: RecetteService,
              public navParams: NavParams) { }
  
  ngOnInit(){
    this.name = this.navParams.get('recetteName');

  }
}
