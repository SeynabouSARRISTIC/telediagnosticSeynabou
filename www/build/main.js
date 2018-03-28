webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualisationDuParcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VisualisationDuParcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualisationDuParcPage = (function () {
    //bigdata : Array<any>;
    function VisualisationDuParcPage(navCtrl, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.partners = { gateway: [] };
        this.nombre = 0;
        this.bigdatas = { gateways: [] };
        //userData={username:"energeasyconnect2@yopmail.com", password:"rexel2018"};
        this.personnes = [
            {
                "nom": "DIOUF",
                "prenom": "SONKO"
            },
            {
                "nom": "SARR",
                "prenom": "Seynabou"
            },
            {
                "nom": "NDIAYE",
                "prenom": "DIOP"
            },
            {
                "nom": "BA",
                "prenom": "HABDOU"
            }
        ];
    }
    VisualisationDuParcPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bigdata = [{}];
        console.log('ionViewDidLoad VisualisationDuParcPage');
        console.log('ici');
        this.authServiceProvider.getGat().subscribe(function (data) {
            _this.bigdatas = data;
            console.log("ok");
            console.log(_this.bigdatas.length);
            console.log("---------------------------------------------");
            console.log(_this.bigdatas);
            var element = {
                "code": "",
                "gatewayId": "",
                "name": "",
                "status": "",
                "activated": false
            };
            for (var i = 0; i < _this.bigdatas.length; i++) {
                var data_1 = _this.bigdatas[i];
                element.code = data_1.placeOID;
                element.gatewayId = data_1.gatewayId;
                var partners = data_1.partners;
                for (var j = 0; j < partners.length; j++) {
                    var partner = partners[j];
                    if (partner.status == "OWNER") {
                        element.name = partner.name;
                        element.activated = partner.activated;
                    }
                }
                element.status = data_1.connectivity.status;
                console.log(element);
                console.log("yes");
                console.log(_this.bigdata);
                if (i == 0) {
                    _this.bigdata.splice(0, 1);
                    _this.bigdata.push(element);
                }
                else {
                    _this.bigdata.push(element);
                }
            }
        }, function (err) {
            console.log(err);
        });
        console.log("------------this.bigdata");
        console.log(this.bigdata.length);
        this.nombreUtilisateur = this.bigdata.length;
    };
    VisualisationDuParcPage.prototype.search = function () {
        console.log(this.texteRechercher);
    };
    VisualisationDuParcPage.prototype.quitter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    VisualisationDuParcPage.prototype.details = function () {
        if (this.detail == true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    VisualisationDuParcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualisation-du-parc',template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\visualisation-du-parc\visualisation-du-parc.html"*/'\n<ion-header class="entete">\n  <ion-navbar >\n    <ion-title><img alt="logo" width="50" height="100" src="assets/imgs/box-energeasy-connect.jpg"/>Visualisation du Parc</ion-title>\n  </ion-navbar>\n  <div class="entete">\n    <h3 class="rechercher">Rechercher</h3>\n    <ion-searchbar class="bar" (ionInput)="search()" [(ngModel)]="texteRechercher"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n </div>\n  <div class="entete">\n    <div class="bar-stable">\n      <h3 class="rechercher">{{ nombreUtilisateur }} Utilisateur{{ nombreUtilisateur<=1 ? "":"s"}}</h3>\n    </div>\n  </div>\n</ion-header>\n<ion-content class="entete">\n  <div class="row header" id="tete">\n    <div class="col">Details</div>\n    <div class="col">Code</div>\n    <div class="col">Agence</div>\n    <div class="col">Box</div>\n    <div class="col">Statut</div>\n    <div class="col"></div>\n  </div>\n  <div class="row table_content" *ngFor="let element of bigdata">\n    <div class="col" (ngModel)="detail"><button ion-button  (click)="details()">Details</button></div>\n    <div class="col">{{ element.code}}</div>\n    <div class="col">{{ element.name }}</div>\n    <div class="col">{{ element.gatewayId }}</div>\n    <div class="col">{{ element.status }}</div>\n    <div class="col "><button ion-button class="button {{element.activated?\'bouton_ok\':\'bouton_ko\'}}" (click)="$event">{{element.activated?\'OK\':\'KO\'}}</button></div>\n  </div>\n  <div class="buttonQuitter">\n    <button ion-button (click)="quitter()">Quitter</button>\n  </div>\n  <!--\n  <div *ngFor="let p of personnes">\n    {{p.nom}} / {{p.prenom}}\n  </div>\n  -->\n</ion-content>\n\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\visualisation-du-parc\visualisation-du-parc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* ServicesProvider */]])
    ], VisualisationDuParcPage);
    return VisualisationDuParcPage;
}());

//# sourceMappingURL=visualisation-du-parc.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/device/device.module": [
		281,
		2
	],
	"../pages/modal-admin/modal-admin.module": [
		282,
		1
	],
	"../pages/visualisation-de-la-boxe/visualisation-de-la-boxe.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SouvenirDeMoi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SouvenirDeMoi = (function () {
    function SouvenirDeMoi() {
        this.accountList = [
            {
                "login": "",
                "password": ""
            }
        ];
        this.getData();
    }
    SouvenirDeMoi.prototype.getAccounts = function () {
        return this.accountList;
    };
    SouvenirDeMoi.prototype.getAccount = function (login) {
        var data_found = {
            "login": "",
            "password": ""
        };
        this.accountList.forEach(function (data) {
            if (data.login.includes(login)) {
                data_found = data;
            }
        });
        return data_found;
    };
    //load data in database
    SouvenirDeMoi.prototype.getData = function () {
        this.accountList = [
            {
                "login": "sarr",
                "password": "123456"
            },
            {
                "login": "diomande",
                "password": "carter"
            }
        ];
    };
    //add the data in database
    SouvenirDeMoi.prototype.addData = function (account) {
    };
    SouvenirDeMoi.prototype.addAccount = function (account, isChecked) {
        if (!this.contains(account.login) && isChecked) {
            this.accountList.push(account);
            this.addData(account);
            //Here, add in database
        }
    };
    SouvenirDeMoi.prototype.contains = function (login) {
        var isInclude = false;
        this.accountList.forEach(function (data) {
            if (data.login === login) {
                isInclude = true;
            }
        });
        return isInclude;
    };
    SouvenirDeMoi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SouvenirDeMoi);
    return SouvenirDeMoi;
}());

//# sourceMappingURL=souvenirDeMoi.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visualisation_du_parc_visualisation_du_parc__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_souvenirService_souvenirDeMoi__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_visualisation_de_la_boxe_visualisation_de_la_boxe__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_device_device__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualisation_du_parc_visualisation_du_parc__["a" /* VisualisationDuParcPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visualisation_de_la_boxe_visualisation_de_la_boxe__["a" /* VisualisationDeLaBoxePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_device_device__["a" /* DevicePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-admin/modal-admin.module#ModalAdminPageModule', name: 'ModalAdminPage', segment: 'modal-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualisation-de-la-boxe/visualisation-de-la-boxe.module#VisualisationDeLaBoxePageModule', name: 'VisualisationDeLaBoxePage', segment: 'visualisation-de-la-boxe', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualisation_du_parc_visualisation_du_parc__["a" /* VisualisationDuParcPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visualisation_de_la_boxe_visualisation_de_la_boxe__["a" /* VisualisationDeLaBoxePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_device_device__["a" /* DevicePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_souvenirService_souvenirDeMoi__["a" /* SouvenirDeMoi */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    //rootPage:any = TopologyPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualisation_de_la_boxe_visualisation_de_la_boxe__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevicePage = (function () {
    function DevicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DevicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicePage');
    };
    DevicePage.prototype.quitterDevice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__visualisation_de_la_boxe_visualisation_de_la_boxe__["a" /* VisualisationDeLaBoxePage */]);
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\device\device.html"*/'<!--\n  Generated template for the DevicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Device</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>N°{{}}</h1>\n  <div>\n    <h3>Time Start</h3>\n    <h3>Etat Box</h3>\n  </div>\n  <div class="row header" id="tete">\n    <div class="col">Details</div>\n    <div class="col">Device</div>\n    <div class="col">Agence</div>\n    <div class="col">Box</div>\n    <div class="col">Statut</div>\n    <div class="col"></div>\n  </div>\n  <div class="row table_content" *ngFor="let element of Devices">\n    <div class="col" (ngModel)="detail"><button ion-button  (click)="details()">Details</button></div>\n    <div class="col">{{ element.code}}</div>\n    <div class="col">{{ element.name }}</div>\n    <div class="col">{{ element.gatewayId }}</div>\n    <div class="col">{{ element.status }}</div>\n    <div class="col "><button ion-button class="button {{element.activated?\'bouton_ok\':\'bouton_ko\'}}" (click)="$event">{{element.activated?\'OK\':\'KO\'}}</button></div>\n  </div>\n  <div class="buttonQuitter">\n    <button ion-button (click)="quitterDevice()">Quitter</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\device\device.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], DevicePage);
    return DevicePage;
    var _a, _b;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualisationDeLaBoxePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualisation_du_parc_visualisation_du_parc__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VisualisationDeLaBoxePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualisationDeLaBoxePage = (function () {
    function VisualisationDeLaBoxePage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    VisualisationDeLaBoxePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisualisationDeLaBoxePage');
    };
    VisualisationDeLaBoxePage.prototype.Alldevices = function () {
        var _this = this;
        this.service.getDevices().subscribe(function (data) {
            _this.Devices = data;
            console.log("le nombre de devices connecté a ce controlleur est : " + _this.Devices.length);
            for (var i = 0; i < _this.Devices.length; i++) {
                console.log('je parcour le for (' + i + ') : ', _this.Devices[i]);
                console.log('Partners name : ', _this.Devices[i].label);
                console.log('Identifiant de Device : ', _this.Devices[i].deviceURL);
                var listcmd = _this.Devices[i].definition.commands;
                var liststate = _this.Devices[i].definition.states;
                var proto = _this.Devices[i].deviceURL.split(":");
                console.log('le protocole est : ' + proto[0]);
                console.log('Commandes possible : ');
                for (var j = 0; j < listcmd.length; j++) {
                    console.log(listcmd[j]);
                    console.log(liststate[j]);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    VisualisationDeLaBoxePage.prototype.quitterVisu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualisation_du_parc_visualisation_du_parc__["a" /* VisualisationDuParcPage */]);
    };
    VisualisationDeLaBoxePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualisation-de-la-boxe',template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\visualisation-de-la-boxe\visualisation-de-la-boxe.html"*/'<!--\n  Generated template for the VisualisationDeLaBoxePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>VisualisationDeLaBoxe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>N°{{}}</h1>\n  <div>\n    <h3>Time Start</h3>\n    <h3>Etat Box</h3>\n  </div>\n  <div class="row header" id="tete">\n    <div class="col">Details</div>\n    <div class="col">Device</div>\n    <div class="col">Agence</div>\n    <div class="col">Box</div>\n    <div class="col">Statut</div>\n    <div class="col"></div>\n  </div>\n  <div class="row table_content" *ngFor="let element of Devices">\n    <div class="col" (ngModel)="detail"><button ion-button  (click)="details()">Details</button></div>\n    <div class="col">{{ element.code}}</div>\n    <div class="col">{{ element.name }}</div>\n    <div class="col">{{ element.gatewayId }}</div>\n    <div class="col">{{ element.status }}</div>\n    <div class="col "><button ion-button class="button {{element.activated?\'bouton_ok\':\'bouton_ko\'}}" (click)="$event">{{element.activated?\'OK\':\'KO\'}}</button></div>\n  </div>\n  <div class="buttonQuitter">\n    <button ion-button (click)="quitterVisu()">Quitter</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\visualisation-de-la-boxe\visualisation-de-la-boxe.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* ServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* ServicesProvider */]) === "function" && _b || Object])
    ], VisualisationDeLaBoxePage);
    return VisualisationDeLaBoxePage;
    var _a, _b;
}());

//# sourceMappingURL=visualisation-de-la-boxe.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualisation_du_parc_visualisation_du_parc__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_souvenirService_souvenirDeMoi__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, authServiceProvider, modal, souvenirDeMoi) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.modal = modal;
        this.souvenirDeMoi = souvenirDeMoi;
        this.partners = { gateway: [] };
        this.nombre = 0;
        this.bigdata = { gateways: [] };
        this.seSouvenir = false;
        this.userData = { username: "energeasyconnect2@yopmail.com", password: "rexel2018" };
        //userData={username:"", password:""};
        this.accounts = [{
                "login": "",
                "password": ""
            }];
        console.log(souvenirDeMoi.getAccounts());
        this.accounts = souvenirDeMoi.getAccounts();
    }
    HomePage.prototype.login = function () {
        var _this = this;
        //user et mot de passe à recuperer dans le formulaire de login
        //Api.connections
        this.authServiceProvider.getPosts(this.userData.username, this.userData.password)
            .then(function (result) {
            _this.souvenirDeMoi.addAccount({
                "login": _this.userData.username,
                "password": _this.userData.password
            }, _this.seSouvenir);
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            console.log(_this.bigdata);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualisation_du_parc_visualisation_du_parc__["a" /* VisualisationDuParcPage */]);
            console.log(_this.souvenirDeMoi.getAccounts());
        }, function (err) {
            //connection  failed message
        });
    };
    HomePage.prototype.openModal = function () {
        //admin ou client
        this.nombre++;
        if (this.nombre % 6 == 0) {
            this.nombre = 0;
            var myModal = this.modal.create('ModalAdminPage');
            myModal.present();
        }
    };
    HomePage.prototype.Allgetaways = function () {
        var _this = this;
        this.authServiceProvider.getGat().subscribe(function (data) {
            _this.bigdata = data;
            console.log(_this.bigdata.length);
            for (var i = 0; i < _this.bigdata.length; i++) {
                console.log('je parcour le for', _this.bigdata[i]);
                console.log('Partners : ', _this.bigdata[i].gatewayId);
                console.log('juste pour voir1');
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.searchLogin = function () {
        console.log(this.userData.username);
        var texte = this.userData.username;
        console.log(this.souvenirDeMoi.getAccount(texte));
    };
    HomePage.prototype.changeState = function () {
        this.seSouvenir = this.seSouvenir = !this.seSouvenir;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center class="whiteBann">\n      <img alt="logo" width="140" height="140" src="assets/imgs/logo.png" (click)="openModal()">\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroundLogin">\n\n  <br>\n  <div class="fontWhite text_center">\n    <h2>Connexion</h2>\n  </div>\n  <form #loginForm="ngForm"  autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <div class="fontWhite">\n            Email utilisateur\n          </div>\n          <ion-item>\n            <ion-input placeholder="Email" name="username" id="loginField" (ionChange)="searchLogin(userData.username)"\n                       type="text" required [(ngModel)]="userData.username" #email list="accounts"></ion-input>\n          </ion-item>\n\n          <datalist id="accounts">\n            <option *ngFor="let account of accounts" value="{{account.login}}"></option>\n          </datalist>\n\n          <br>\n          <div class="fontWhite">\n            Mot de passe\n          </div>\n          <ion-item>\n            <ion-input placeholder="Password" name="password" id="passwordField"\n                       type="{{afficherMessage.checked ? \'text\' : \'password\'}}" required [(ngModel)]="userData.password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <input id="remember" type="checkbox" [checked]="seSouvenir" (change)="changeState()" >&nbsp;&nbsp;<div class="fontWhite"><label for="remember">Se souvenir de moi</label></div>\n    </ion-row>\n    <br>\n    <ion-row>\n      <input id="show" type="checkbox" (ngModel)="ok" #afficherMessage>&nbsp;&nbsp;<label for="show"><div class="fontWhite" ><label for="show">Afficher le mot de passe</label></div></label>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n      </ion-col>\n    </ion-row>\n  </form>\n  <button ion-button class="submit-btn btnLog" full type="submit" style="height:80px;"\n          [disabled]="!loginForm.form.valid" (click)="login()" >Login\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_souvenirService_souvenirDeMoi__["a" /* SouvenirDeMoi */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let apiUrl="http POST https://std9-1.overkiz.com/enduser-mobile-web/enduserAPI";
/*

  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.

*/
var ServicesProvider = (function () {
    //private params='userId=energeasyconnect2@yopmail.com&userPassword=rexel2018';
    function ServicesProvider(http) {
        this.http = http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-cache' })
        };
        this.Allpartners = { partner: [] };
        this.ROOT_URL = 'https://std9-1.overkiz.com';
        console.log('Hello ServicesProvider Provider');
    }
    ServicesProvider.prototype.getPosts = function (user, mdp) {
        return this.http.post(this.ROOT_URL + '/enduser-mobile-web/enduserAPI/login', 'userId=' + user + '&userPassword=' + mdp, this.httpOptions).toPromise();
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
    };
    ServicesProvider.prototype.getGat = function () {
        return this.http.get(this.ROOT_URL + '/enduser-mobile-web/enduserAPI/setup/gateways').map(function (resp) { return resp; });
    };
    ServicesProvider.prototype.getDevices = function () {
        return this.http.get(this.ROOT_URL + '/setup/devices').map(function (resp) { return resp; });
        // this.ROOT_URL+'/setup/devices').map(resp => resp)
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ServicesProvider);
    return ServicesProvider;
    var _a;
}());

//# sourceMappingURL=auth-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map