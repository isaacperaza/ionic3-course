import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { CategoriesPage } from '../pages/categories/categories';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsFullPage } from '../pages/products-full/products-full';
import { ProductsVirtualPage } from '../pages/products-virtual/products-virtual';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductsPage,
    ProductPage,
    CategoriesPage,
    ProfilePage,
    ProductsFullPage,
    ProductsVirtualPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductsPage,
    ProductPage,
    CategoriesPage,
    ProfilePage,
    ProductsFullPage,
    ProductsVirtualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
