import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductPage } from '../product/product';


/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products-virtual',
  templateUrl: 'products-virtual.html',
})
export class ProductsVirtualPage {

  products: any = [];
  


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public httpClient: HttpClient,
    public loadingCtrl: LoadingController
  ) {
    // let loader = loadingCtrl.create({
    //   content: 'Cargando productos...',
    //   spinner: 'dots'
    // });

    // loader.present();

    // let data = this.navParams.data;
    // this.products = this.products.filter((product, index) => {
    //   // console.log(product);
    //   return product.category === data.id;
    // });
    // this.httpClient.get('https://api.myjson.com/bins/lvfd1')
    //   .subscribe(repsonseData => {
    //     // Read the result field from the JSON response.
    //     this.products = repsonseData['data'].filter((product, index) => {
    //       console.log(product);
    //       return product.category === data.id;
    //     });

    //     loader.dismiss();
    //   });
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Cargando productos...',
      spinner: 'crescent'
    });

    loader.present();

    // let data = this.navParams.data;
    this.httpClient.get('https://api.myjson.com/bins/u5p3d')
    .subscribe(repsonseData => {
      this.products = repsonseData['data'];
      // Read the result field from the JSON response.
      // this.products = repsonseData['data'].filter((product, index) => {
      //   // console.log(product);
      //   return product.category === data.id;
      // });

      loader.dismiss();
    });
  }

  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter');
  // }

  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter');
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave');
  // }

  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave');
  // }

  // ionViewWillUnload() {
  //   console.log('ionViewWillUnload');
  // }

  // ionViewCanEnter() {
  //   console.log('ionViewCanEnter');
  // }

  // ionViewCanLeave() {
  //   console.log('ionViewCanLeave');
  // }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, product);
  }
}
