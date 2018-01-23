import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';


/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product: any;
  productDetails: string = 'specifications';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    this.product = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  back() {
    this.navCtrl.pop();
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }

  addToFavorites(product) {
    this.events.publish('favorites:add', product);
  }
}
