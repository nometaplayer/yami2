import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);

    this.navCtrl.push(HomePage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
