import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  productScan: string = '';
  photo: string = '';
  result: string= '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private barcodeScanner: BarcodeScanner){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.photo = base64Image;
    }, (err) => {
     // Handle error
    });
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
      // this.
      this.productScan = barcodeData.text;
      window.open(`http://www.upcindex.com/${barcodeData.text}`, '_system');
     }, (err) => {
         // An error occurred
     });
  }
}
