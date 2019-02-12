import { Stats } from '../../Models/data.interface';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import stats from "../services/data.services";

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage implements OnInit {
  stats: Stats[];
  randomStats: Stats[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) { }
  ngOnInit(){
    this.stats = stats.stats;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
    console.log(this.stats);
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  getRandom() {
    let rd = Math.floor(Math.random() *this.stats.length);
    this.randomStats = [this.stats[rd]];
  }
}
