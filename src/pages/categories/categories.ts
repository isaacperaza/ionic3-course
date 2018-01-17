import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: any = [{
    id: 1,
    name: 'Laptops'
  },{
    id: 2,
    name: 'Televisiones' 
  },{
    id: 3,
    name: 'Proyectores'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  goToCategory(category) {
    this.navCtrl.push(ProductsPage, category);
  }
}
