import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';


/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products: any = [{
    name: 'Laptop Acer',
    category: 1
  },{
    name: 'Macbook Pro',
    category: 1
  },{
    name: 'Lenovo',
    category: 1
  },{
    name: 'LG 40 pulgadas',
    category: 2
  },{
    name: 'Proyector Epson',
    category: 3
  }];

  // products: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data = this.navParams.data;
    this.products = this.products.filter((product, index) => {
      return product.category === data.id;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  goToProduct() {
    this.navCtrl.push(ProductPage);
  }
}
