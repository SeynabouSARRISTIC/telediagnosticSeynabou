import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

//let apiUrl="http POST https://std9-1.overkiz.com/enduser-mobile-web/enduserAPI";

/*

  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/

@Injectable()

export class ServicesProvider {

  httpOptions = {

    headers: new HttpHeaders({'Content-type':'application/x-www-form-urlencoded', 'Cache-Control':'no-cache'})

  };

  Allpartners :any = {partner:[]};

  private ROOT_URL = 'https://std9-1.overkiz.com';

  //private params='userId=energeasyconnect2@yopmail.com&userPassword=rexel2018';

  constructor(public http: HttpClient) {

    console.log('Hello ServicesProvider Provider');

  }

  getPosts(user,mdp){
    return this.http.post(this.ROOT_URL+'/enduser-mobile-web/enduserAPI/login', 'userId='+user+'&userPassword='+mdp, this.httpOptions).toPromise();



    /*return this.http.post(this.ROOT_URL+'/enduser-mobile-web/enduserAPI/login', 'userId='+user+'&userPassword='+mdp, this.httpOptions).subscribe(

      data => {

        console.log(data);

        return data},

      // Errors will call this callback instead:

      err => {

        console.log(JSON.stringify(err));

      }

    );
*/

  }

  getGat(){

    return this.http.get(

      this.ROOT_URL+'/enduser-mobile-web/enduserAPI/setup/gateways').map(resp => resp)

  }

  getDevices(){

    return this.http.get(

      this.ROOT_URL+'/setup/devices').map(resp => resp)

    // this.ROOT_URL+'/setup/devices').map(resp => resp)

  }

}
