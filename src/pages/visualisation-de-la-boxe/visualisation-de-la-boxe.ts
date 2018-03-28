import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ServicesProvider} from "../../providers/auth-service/auth-service";
import {VisualisationDuParcPage} from "../visualisation-du-parc/visualisation-du-parc";

/**
 * Generated class for the VisualisationDeLaBoxePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualisation-de-la-boxe',
  templateUrl: 'visualisation-de-la-boxe.html',
})
export class VisualisationDeLaBoxePage {

  Devices: any;

  constructor(public navCtrl: NavController, public service: ServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualisationDeLaBoxePage');
  }

  Alldevices() {

    this.service.getDevices().subscribe(data => {

        this.Devices = data;

        console.log("le nombre de devices connecté a ce controlleur est : " + this.Devices.length)
        for (var i = 0; i < this.Devices.length; i++) {

          console.log('je parcour le for (' + i + ') : ', this.Devices[i]);

          console.log('Partners name : ', this.Devices[i].label);

          console.log('Identifiant de Device : ', this.Devices[i].deviceURL);

          var listcmd = this.Devices[i].definition.commands;

          var liststate = this.Devices[i].definition.states;

          var proto = this.Devices[i].deviceURL.split(":");

          console.log('le protocole est : ' + proto[0]);


          console.log('Commandes possible : ');

          for (var j = 0; j < listcmd.length; j++) {


            console.log(listcmd[j]);

            console.log(liststate[j]);

          }

        }

      }, err => {

        console.log(err);
      }
    )

  }

  quitterVisu() {
    this.navCtrl.push(VisualisationDuParcPage);
  }

}
