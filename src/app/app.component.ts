import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { SecureStorage } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, secureStorage: SecureStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //name of our secure storage application, if it's already created then it won't be created
      secureStorage.create('funWithHybrid').then(
        () => {
          console.log("Secure Storage is ready");
        },
        (error) => {
          //there should be screen lock available in your application with pin or pattern
          console.log(error);
        }
      );
    });
  }
}
