import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SecureStorage } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private getValue: string;
  private setValue: string;

  constructor(public navCtrl: NavController, public secureStorage: SecureStorage) {

  }

  private setKey():void {
    //set token/key for your application, although you can set anywhere
    console.log('set called');
    console.log(this.secureStorage);
    this.secureStorage.set('mytoken', this.setValue)
      .then(
      data => console.log(data),
      error => console.log(error)
      );
  }

  private getKey():void {
    console.log('get called');
    this.secureStorage.get('mytoken')
      .then(
      data => {
        this.getValue = data;
      },
      error => {
        console.log(error)
      }
      );
  }

}
