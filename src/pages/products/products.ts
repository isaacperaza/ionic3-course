import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    shortDescription: 'Intel i7 8 GB ram',
    image: 'https://static.ctonline.mx/img/Thumbs/COMACR6340_100.jpg',
    fullImage: 'https://static.ctonline.mx/imagenes/PROEPS1360/PROEPS1360_400.jpg',
    category: 1
  },{
    name: 'Macbook Pro',
    shortDescription: 'Intel i5 18 GB ram',
    image: 'https://static.ctonline.mx/img/Thumbs/ACCRBT3210_100.jpg',
    fullImage: 'https://static.ctonline.mx/img/Thumbs/ACCRBT3210_100.jpg',
    category: 1
  },{
    name: 'Lenovo',
    shortDescription: 'AMD X 8 GB ram',
    image: 'https://static.ctonline.mx/img/Thumbs/COMLEN6010_100.jpg',
    fullImage: 'https://static.ctonline.mx/img/Thumbs/COMLEN6010_100.jpg',
    category: 1
  },{
    name: 'LG 40 pulgadas',
    shortDescription: 'Smart TV ultra',
    image: 'https://static.ctonline.mx/imagenes/MONLGE1000/MONLGE1000_400.jpg',
    fullImage: 'https://static.ctonline.mx/imagenes/MONLGE1000/MONLGE1000_400.jpg',
    category: 2
  },{
    name: 'Proyector Epson',
    shortDescription: 'Cañon color blanco 60x60x20',
    image: 'https://static.ctonline.mx/img/Thumbs/PROBNQ1480_100.jpg',
    fullImage: 'https://static.ctonline.mx/img/Thumbs/PROBNQ1480_100.jpg',
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

  goToProduct(product) {
    this.navCtrl.push(ProductPage, product);
  }
}
