import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  location: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GeolocationPage');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = resp.coords;
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
