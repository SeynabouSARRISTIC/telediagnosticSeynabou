webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAdminPageModule", function() { return ModalAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_admin__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalAdminPageModule = (function () {
    function ModalAdminPageModule() {
    }
    ModalAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_admin__["a" /* ModalAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_admin__["a" /* ModalAdminPage */]),
            ],
        })
    ], ModalAdminPageModule);
    return ModalAdminPageModule;
}());

//# sourceMappingURL=modal-admin.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
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
 * Generated class for the ModalAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalAdminPage = (function () {
    function ModalAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalAdminPage');
    };
    ModalAdminPage.prototype.client = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ModalAdminPage.prototype.admin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualisation_du_parc_visualisation_du_parc__["a" /* VisualisationDuParcPage */]);
    };
    ModalAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-admin',template:/*ion-inline-start:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\modal-admin\modal-admin.html"*/'<!--\n  Generated template for the ModalAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header >\n  <ion-navbar>\n    <ion-title>ModalAdminPage</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!--\n  <ion-row >\n    <input id="remember" type="checkbox" [(ngModel)]="clientPage">&nbsp;&nbsp;<label for="show"><div class="fontWhite" (click)="admin()">Client</div></label>\n  </ion-row>\n  <br>\n  <ion-row >\n    <input id="show" type="checkbox" [(ngModel)]="adminPage">&nbsp;&nbsp;<label for="show"><div class="fontWhite"  (click)="client()">Admin</div></label>\n  </ion-row>\n  -->\n  <button ion-button (click)="admin()">Admin</button>\n  <button ion-button (click)="client()">Client</button>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\ProjetEntrepriseSeynabouSARR\telediagnostic-Seynabou-SARR\src\pages\modal-admin\modal-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ModalAdminPage);
    return ModalAdminPage;
}());

//# sourceMappingURL=modal-admin.js.map

/***/ })

});
//# sourceMappingURL=1.js.map