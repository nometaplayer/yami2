import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  isLoggedIn:boolean = false;
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  

  fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
  }

  loginfb(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res=> {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
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
