import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ServicesProvider } from "../../providers/auth-service/auth-service";
import {VisualisationDuParcPage} from "../visualisation-du-parc/visualisation-du-parc";
import {ModalAdminPage} from "../modal-admin/modal-admin";
import {SouvenirDeMoi} from "../../providers/souvenirService/souvenirDeMoi";

@Component({

  selector: 'page-home',

  templateUrl: 'home.html'

})

export class HomePage {

  partners : any = {gateway:[]};
  afficher : boolean;
  donnees: any;

  bigdonnees : any;
  nombre:number =0;

  bigdata : any = {gateways:[]};
  seSouvenir :boolean =false;
  responseData: any;
  userData={username:"energeasyconnect2@yopmail.com", password:"rexel2018"};
  //userData={username:"", password:""};
  accounts = [{
    "login":"",
    "password":""
  }];

  constructor(public navCtrl: NavController, public authServiceProvider: ServicesProvider , private modal: ModalController, public souvenirDeMoi: SouvenirDeMoi ) {
    console.log(souvenirDeMoi.getAccounts());
    this.accounts = souvenirDeMoi.getAccounts();

  }
  login(){
    //user et mot de passe à recuperer dans le formulaire de login
    //Api.connections
    this.authServiceProvider.getPosts(this.userData.username, this.userData.password)
   .then((result)=>{
        this.souvenirDeMoi.addAccount({
          "login": this.userData.username,
          "password": this.userData.password
        },this.seSouvenir);

       this.responseData= result;
       console.log(this.responseData);
       localStorage.setItem('userData', JSON.stringify(this.responseData));
       console.log(this.bigdata);
       this.navCtrl.push(VisualisationDuParcPage);
        console.log(this.souvenirDeMoi.getAccounts());
     },(err)=>{
      //connection  failed message

    });
  }

  openModal(){
    //admin ou client
    this.nombre++;
    if(this.nombre%6==0){
      this.nombre=0;
      const myModal = this.modal.create('ModalAdminPage');
      myModal.present();
    }
  }

  Allgetaways(){

    this.authServiceProvider.getGat().subscribe(data => {

        this.bigdata = data;

        console.log(this.bigdata.length)

        for(var i = 0; i<this.bigdata.length; i++){

          console.log('je parcour le for',this.bigdata[i]);

          console.log('Partners : ', this.bigdata[i].gatewayId);
          console.log('juste pour voir1');

        }

      },err=>{

        console.log(err);

      }

    )

  }


  searchLogin(){
    console.log(this.userData.username);
    let texte = this.userData.username;
    console.log(this.souvenirDeMoi.getAccount(texte));
  }


  changeState()
  {
    this.seSouvenir = this.seSouvenir = !this.seSouvenir;
  }


  /*console.log('GateWays: ', data[0]);

        console.log("GateawayId : " , data[0].gatewayId)

        data=>data.gatewayId;*/

}


