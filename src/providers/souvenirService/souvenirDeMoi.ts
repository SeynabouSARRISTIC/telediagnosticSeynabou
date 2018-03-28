import {Injectable} from "@angular/core";

@Injectable()
export class SouvenirDeMoi{

  accountList = [
    {
      "login":"",
      "password":""
    }
  ];

  constructor(){
    this.getData();
  }


  getAccounts(){
    return this.accountList;
  }

  getAccount(login:string){
    var data_found = {
      "login":"",
      "password":""
    }

    this.accountList.forEach(function (data) {

      if(data.login.includes(login)){
          data_found = data;
      }
    });

    return data_found;
  }

  //load data in database
  getData(){
    this.accountList = [
      {
        "login":"sarr",
        "password":"123456"
      },
      {
        "login":"diomande",
        "password":"carter"
      }

    ];
  }

  //add the data in database
  addData(account:any){

  }



  addAccount(account :any, isChecked:boolean){
    if(!this.contains(account.login) && isChecked)
    {
      this.accountList.push(account);
      this.addData(account);
      //Here, add in database
    }

  }


  contains(login:string): boolean
  {
    var isInclude:boolean=false;
    this.accountList.forEach(function (data) {

      if(data.login === login){
        isInclude = true;
      }
    });
    return isInclude;
  }
}
