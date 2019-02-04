import { Stat } from './data/data.interface';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import stats from "./data/data"

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  stats: any=stats;
  randomStats: any=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
                this.stats=stats.stats;
                this.randomStats=stats.stats;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
    console.log(this.stats);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  randomStat() {
    let rs = Math.floor(Math.random() * this.stats.length);
    this.randomStats = [this.stats[rs]];
  }
}
