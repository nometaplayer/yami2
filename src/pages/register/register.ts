import { LoginPage } from './../login/login';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  enArriere(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0)
    alert("Veuillez remplir tout les champs.");
    if(this.password.length != this.repassword.length)
    alert("Le mot de passe est différent avec ça confirmation.");
  }

}
