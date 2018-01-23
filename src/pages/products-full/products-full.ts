import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductPage } from '../product/product';

/**
 * Generated class for the ProductsFullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products-full',
  templateUrl: 'products-full.html',
})
export class ProductsFullPage {

  filter: false;
  products: any = [];
  localProducts: any = [];
  searchInputText = '';

  productsX: any = [
    {"disccount": false, "name": "Laptop Acer", "shortDescription": "Intel i7 8 GB ram", "image": "https://static.ctonline.mx/img/Thumbs/COMACR6340_100.jpg", "fullImage": "https://static.ctonline.mx/imagenes/PROEPS1360/PROEPS1360_400.jpg", "category": 1 }, 
    {"disccount": true, "name": "Macbook Pro", "shortDescription": "Intel i5 18 GB ram", "image": "https://static.ctonline.mx/img/Thumbs/ACCRBT3210_100.jpg", "fullImage": "https://static.ctonline.mx/img/Thumbs/ACCRBT3210_100.jpg", "category": 1 },
    {"disccount": false, "name": "Lenovo", "shortDescription": "AMD X 8 GB ram", "image": "https://static.ctonline.mx/img/Thumbs/COMLEN6010_100.jpg", "fullImage": "https://static.ctonline.mx/img/Thumbs/COMLEN6010_100.jpg", "category": 1 },
    {"disccount": false, "name": "LG 40 pulgadas", "shortDescription": "Smart TV ultra", "image": "https://static.ctonline.mx/imagenes/MONLGE1000/MONLGE1000_400.jpg", "fullImage": "https://static.ctonline.mx/imagenes/MONLGE1000/MONLGE1000_400.jpg", "category": 2 },
    {"disccount": false, "name": "Proyector Epson", "shortDescription": "Cañon color blanco 60x60x20", "image": "https://static.ctonline.mx/img/Thumbs/PROBNQ1480_100.jpg", "fullImage": "https://static.ctonline.mx/img/Thumbs/PROBNQ1480_100.jpg", "category": 3 }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public httpClient: HttpClient,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Cargando productos...',
      spinner: 'crescent'
    });

    loader.present();

    this.httpClient.get('https://api.myjson.com/bins/18i4u5')
    .subscribe(repsonseData => {
      // console.
      // Read the result field from the JSON response.
      this.products = repsonseData['data'];
      this.localProducts = this.products;

      loader.dismiss();
    });
  }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, product);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.localProducts = [];

    setTimeout(() => {
      this.httpClient.get('https://api.myjson.com/bins/18i4u5')
      .subscribe(repsonseData => {
        // console.
        // Read the result field from the JSON response.
        this.products = repsonseData['data'];
        this.localProducts = this.products;
        refresher.complete();
      });
    }, 1000);
  }

  presentToast(userActionMessage) {
    let toast = this.toastCtrl.create({
      message: userActionMessage,
      duration: 3000
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  confirmFilterByDiscount() {
    var message = 'Estas viendo todos los productos';
    
    if (!this.filter) {
      // this.filterByDisccount();
      this.productsFilter();
      this.presentToast(message);
      return;
    }

    let confirm = this.alertCtrl.create({
      title: 'Filtar por Descuento?',
      message: 'Estas seguro que deseas mostar solo los productos con descuento',
      // enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.filter = false;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.productsFilter();
            // if (!this.filter) {
            message = 'Estas viendo los productos con descuento';
            // }
            this.presentToast(message);
          }
        }
      ]
    });
    confirm.present();
  }

  productsFilter() {
    this.localProducts = this.products;
    let val = this.searchInputText;

    this.localProducts = this.products.filter((item) => {
      if (
        ((this.filter && item['disccount']) || !this.filter)
        &&
        (
          (
            val.trim() != '' &&
            item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1
          ) || (val === null || val.trim() === '')
        )
      ) {
        console.log('disccount');
        return true;
      }
    });
  }
}
