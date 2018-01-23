import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriesPage } from '../pages/categories/categories';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsFullPage } from '../pages/products-full/products-full';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { ProductsVirtualPage } from '../pages/products-virtual/products-virtual';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoritesProducts: any = [];
  rootPage: any = CategoriesPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events: Events
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.suscribeToFavorites();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToHome() {
    this.nav.popToRoot();
  }

  goToCategories() {
    this.nav.push(CategoriesPage);
  }

  goToProfile() {
    this.nav.push(ProfilePage);
  }

  goToProductsFull() {
    this.nav.push(ProductsFullPage);
  }

  goToProducts() {
    this.nav.push(ProductsPage);
  }

  goToProductsVirtual() {
    this.nav.push(ProductsVirtualPage);
  }

  goToProduct(product) {
    this.nav.push(ProductPage, product);
  }

  suscribeToFavorites() {
    this.events.subscribe('favorites:add', (product) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('suscribeToFavorites');
      console.log(product);
      this.favoritesProducts.push(product);
    });
  }
}
