import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the VisualisationDuParcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-visualisation-du-parc',
  templateUrl: 'visualisation-du-parc.html',
})
export class VisualisationDuParcPage {

  partners : any = {gateway:[]}
  afficher : boolean;
  donnees: any;
  element : any;
  bigdonnees : any;
  nombre:number =0;
  texteRechercher : string;
  detail : boolean;
  bigdatas : any = {gateways:[]};
  //userData={username:"energeasyconnect2@yopmail.com", password:"rexel2018"};
  personnes :any = [
      {
        "nom":"DIOUF",
        "prenom":"SONKO"
      },
      {
        "nom":"SARR",
        "prenom":"Seynabou"
      },
      {
        "nom":"NDIAYE",
        "prenom":"DIOP"
      },
      {
        "nom":"BA",
        "prenom":"HABDOU"
      }
    ];


  bigdata : [any];
  nombreUtilisateur : number;
  //bigdata : Array<any>;

  constructor(public navCtrl: NavController, public authServiceProvider: ServicesProvider) {

  }

  ionViewDidLoad() {
    this.bigdata = [{}];
    console.log('ionViewDidLoad VisualisationDuParcPage');
    console.log('ici');
    this.authServiceProvider.getGat().subscribe(data => {

        this.bigdatas = data;

        console.log("ok");
        console.log(this.bigdatas.length);
        console.log("---------------------------------------------");
        console.log(this.bigdatas);

      let element = {
        "code" : "",
        "gatewayId" : "",
        "name" : "",
        "status" : "",
        "activated":false
      };




      for(let i = 0; i<this.bigdatas.length; i++){
          let data = this.bigdatas[i];



          element.code = data.placeOID;
          element.gatewayId = data.gatewayId;
          let partners = data.partners;
          for(let j = 0; j<partners.length; j++) {
            let partner = partners[j];
            if (partner.status == "OWNER") {
              element.name = partner.name;
              element.activated = partner.activated;
            }
          }
          element.status = data.connectivity.status;
          console.log(element);
          console.log("yes");
          console.log(this.bigdata);

          if(i==0){
            this.bigdata.splice(0,1);
            this.bigdata.push(element);
          }
          else {
            this.bigdata.push(element);
          }
      }


      },err=>{
        console.log(err);
      }
    )

    console.log("------------this.bigdata");
    console.log(this.bigdata.length);
    this.nombreUtilisateur = this.bigdata.length;

  }


  search()
  {
    console.log(this.texteRechercher);


  }
  quitter(){
    this.navCtrl.push(HomePage);
  }

  details(){
     if(this.detail ==true ){
    this.navCtrl.push(HomePage);

}
}
}
