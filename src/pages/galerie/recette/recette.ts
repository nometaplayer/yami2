import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.services';


@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage implements OnInit {

  selectedItems = [];

  total = 0;


  constructor(public recetteService: RecetteService) { }
  
  ngOnInit(){
    let items = this.recetteService.getRecette();
    let selected= {};
    for(let obj of items) {
      if(selected[obj.id]){
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count:1};
      }
    }
    this.selectedItems= Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a,b) => a+ (b.count * b.price),0);
  }

}
