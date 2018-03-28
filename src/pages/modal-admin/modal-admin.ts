import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {VisualisationDuParcPage} from "../visualisation-du-parc/visualisation-du-parc";

/**
 * Generated class for the ModalAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-admin',
  templateUrl: 'modal-admin.html',
})
export class ModalAdminPage {
   clientPage:Boolean;
   adminPage :Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAdminPage');
  }


  client(){
    this.navCtrl.push(HomePage)
  }

  admin(){
      this.navCtrl.push(VisualisationDuParcPage);
  }

}
