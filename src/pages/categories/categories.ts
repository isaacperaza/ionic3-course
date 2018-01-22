import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { ProductsFullPage } from '../products-full/products-full';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories: any = [{
    id: 1,
    name: 'Laptops',
    image: 'https://static.ctonline.mx/img/Thumbs/COMACR6340_100.jpg'
  },{
    id: 2,
    name: 'Televisiones',
    image: 'https://static.ctonline.mx/imagenes/MONLGE1000/MONLGE1000_400.jpg' 
  },{
    id: 3,
    name: 'Proyectores',
    image: 'https://static.ctonline.mx/img/Thumbs/PROBNQ1480_100.jpg'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  goToCategory(category) {
    this.navCtrl.push(ProductsPage, category);
  }

  goToProductsFull() {
    this.navCtrl.push(ProductsFullPage);
  }
}
