(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XXu":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "kbRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    NgbdModalContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "/OG6":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bharaneedharan\Documents\ICC-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0KVf":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography-section.component.html */ "htC0");
/* harmony import */ var _typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography-section.component.css */ "aScS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent.ctorParameters = function () { return []; };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography-section',
            template: _raw_loader_typography_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "0cls":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./crs-section.component.html */ "eo/P");
/* harmony import */ var _crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crs-section.component.css */ "/OG6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent.ctorParameters = function () { return []; };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-crs-section',
            template: _raw_loader_crs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_crs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "6E3v":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- Tabs with icons -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n      </div>\r\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\r\n      <!-- Menu -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n      </div>\r\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n          <ngb-tab title=\"Home\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Profile\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Messages\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>40%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\r\n      </div>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>60%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\r\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n      </nav>\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\r\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n        </ngb-pagination>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-grid justify-content-between\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\r\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\r\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\r\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\r\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\r\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\r\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "6dFm":
/*!**********************************************!*\
  !*** ./src/app/prodct2/prodct2.component.ts ***!
  \**********************************************/
/*! exports provided: Prodct2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodct2Component", function() { return Prodct2Component; });
/* harmony import */ var _raw_loader_prodct2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./prodct2.component.html */ "lHyI");
/* harmony import */ var _prodct2_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prodct2.component.css */ "eDb9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prodct2Component = /** @class */ (function () {
    function Prodct2Component() {
    }
    Prodct2Component.prototype.ngOnInit = function () {
    };
    Prodct2Component.ctorParameters = function () { return []; };
    Prodct2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-prodct2',
            template: _raw_loader_prodct2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_prodct2_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], Prodct2Component);
    return Prodct2Component;
}());



/***/ }),

/***/ "9+np":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/inputs-section/inputs-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section pb-0 section-components\">\r\n  <div class=\"container mb-5\">\r\n    <!-- Inputs -->\r\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\r\n    <div class=\"mb-3\">\r\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"py-5 bg-secondary\">\r\n    <div class=\"container\">\r\n      <!-- Inputs (alternative) -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group has-success\">\r\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\r\n          </div>\r\n          <div class=\"form-group has-danger\">\r\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "92Y0":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9ucy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9W4q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/angular-section/angular-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Javascript Components</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\r\n       Default\r\n      </button>\r\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\r\n         Notification\r\n      </button>\r\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content bg-gradient-danger\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"py-3 text-center\">\r\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\r\n              <h4 class=\"heading mt-4\">You should read this!</h4>\r\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\r\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\r\n         Form\r\n      </button>\r\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body p-0\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n              <div class=\"card-header bg-white pb-5\">\r\n                <div class=\"text-muted text-center mb-3\">\r\n                  <small>Sign in with</small>\r\n                </div>\r\n                <div class=\"btn-wrapper text-center\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/github.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Github</span>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/google.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Google</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body px-lg-5 py-lg-5\">\r\n                <div class=\"text-center text-muted mb-4\">\r\n                  <small>Or sign in with credentials</small>\r\n                </div>\r\n                <form role=\"form\">\r\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                      <span>Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Datepicker -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\r\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n          </div>\r\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mt-4 mt-md-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\r\n      <div class=\"input-daterange datepicker row align-items-center\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\r\n              <ng-template #t let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\r\n              <ng-template #t1 let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Tooltips and Popovers -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "FCdR":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tabs-section.component.html */ "6E3v");
/* harmony import */ var _tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-section.component.css */ "YSaL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent.ctorParameters = function () { return []; };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tabs-section',
            template: _raw_loader_tabs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tabs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<main>\r\n  <div class=\"position-relative\">\r\n    \r\n    <!-- shape Hero -->\r\n    <section class=\"section\" style=\"background-image: url(../../assets/img/theme/ICC\\ portal\\ backgroud.JPG);\">\r\n      <!-- <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div> -->\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;\">THE MOST EXHILLARATING UX\r\n                <span>FOR UTILITIES</span>\r\n              </h1>\r\n              <p class=\"lead  text-white\">UX Application that works as simple as mobile App.Customer service, portal, IVR, chatbot can be integrated seamlessly </p>\r\n              <div class=\"btn-wrapper\">\r\n                <a  class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Learn More</span>\r\n                </a>\r\n                <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Request Demo</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"card\" style=\"margin-top:40px;border: none;\">\r\n                <video  poster=\"../../assets/img/theme/Home.png\" src=\"../../assets/img/theme/Home_Final.mp4\" type=\"video/mp4\"\r\n                controls></video>\r\n               \r\n                <!-- <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div> -->\r\n              </div>\r\n              <p class=\"lead text-center text-white\">Home Demo</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\"> -->\r\n      <!-- <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    <!-- </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  <!-- </section> -->\r\n  <!-- <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>  -->\r\n  <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n</main>\r\n");

/***/ }),

/***/ "HiAf":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/alerts-section/alerts-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <h3 class=\"mt-lg mb-4\">\r\n    <span>Alerts</span>\r\n  </h3>\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\r\n      <ng-container *ngIf=\"alert.icon\">\r\n        <div class=\"alert-inner--icon\">\r\n            <i class=\"{{alert.icon}}\"></i>\r\n        </div>\r\n      </ng-container>\r\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\r\n    </ngb-alert>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "K4CT":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./buttons-section.component.html */ "m1bB");
/* harmony import */ var _buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons-section.component.css */ "gFCd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent.ctorParameters = function () { return []; };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-buttons-section',
            template: _raw_loader_buttons_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_buttons_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "KKlp":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.video-container video {\n  /* Make video to at least 100% wide and tall */\n  min-width: 100%;\n  min-height: 100%;\n  /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n  width: auto;\n  height: auto;\n  /* Center the video */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFBSiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAudmlkZW8tY29udGFpbmVyIHZpZGVvIHtcclxuICAgIC8qIE1ha2UgdmlkZW8gdG8gYXQgbGVhc3QgMTAwJSB3aWRlIGFuZCB0YWxsICovXHJcbiAgICBtaW4td2lkdGg6IDEwMCU7IFxyXG4gICAgbWluLWhlaWdodDogMTAwJTsgXHJcbiAgXHJcbiAgICAvKiBTZXR0aW5nIHdpZHRoICYgaGVpZ2h0IHRvIGF1dG8gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSBzdHJldGNoaW5nIG9yIHNxdWlzaGluZyB0aGUgdmlkZW8gKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gICAgLyogQ2VudGVyIHRoZSB2aWRlbyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "KuAA":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./versions-section.component.html */ "P0L2");
/* harmony import */ var _versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./versions-section.component.css */ "92Y0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent.ctorParameters = function () { return []; };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-versions-section',
            template: _raw_loader_versions_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_versions_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "OK6E":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWNsZW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "P0L2":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/versions-section/versions-section.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Do you love this awesome\r\n          <span class=\"text-success\">Design System for Angular?</span>\r\n        </h2>\r\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "PwEl":
/*!***********************************************!*\
  !*** ./src/app/prodct3/prodct3.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kY3QzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "QaPg":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-lg section-nucleo-icons pb-250\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Nucleo Icons</h2>\r\n        <p class=\"lead\">\r\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\r\n        </p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blur--hover\">\r\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\r\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n          <!-- Center -->\r\n          <i class=\"icon ni ni-diamond\"></i>\r\n          <!-- Right 1 -->\r\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\r\n          <i class=\"icon icon-sm ni ni-app\"></i>\r\n          <i class=\"icon icon-sm ni ni-atom\"></i>\r\n          <!-- Right 2 -->\r\n          <i class=\"icon ni ni-bag-17\"></i>\r\n          <i class=\"icon ni ni-bell-55\"></i>\r\n          <i class=\"icon ni ni-credit-card\"></i>\r\n          <!-- Left 1 -->\r\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\r\n          <i class=\"icon icon-sm ni ni-building\"></i>\r\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\r\n          <!-- Left 2 -->\r\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\r\n          <i class=\"icon ni ni-camera-compact\"></i>\r\n          <i class=\"icon ni ni-chart-bar-32\"></i>\r\n        </div>\r\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <div class=\"position-relative\">\r\n    \r\n    <!-- shape Hero -->\r\n    <section class=\"section\" style=\"background-image: url(../../assets/img/theme/ICC\\ portal\\ backgroud.JPG);\">\r\n      <!-- <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div> -->\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;margin-left: 95px;\" >THE MOST \r\n                <!-- <span>FOR UTILITIES</span> -->\r\n              </h1>\r\n              <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;\">EXHILLARATING UX FOR\r\n                <!-- <span>FOR UTILITIES</span> -->\r\n              </h1>\r\n              <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;margin-left: 95px;\">UTILITIES\r\n                <!-- <span>FOR UTILITIES</span> -->\r\n              </h1>\r\n              <p class=\"lead  text-white\">UX Application that works as simple as mobile App.Customer service, portal, IVR, chatbot can be integrated seamlessly </p>\r\n              <div class=\"btn-wrapper\">\r\n                <a  class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Learn More</span>\r\n                </a>\r\n                <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Request Demo</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"card\" style=\"margin-top:40px;border: none;\">\r\n                <video  poster=\"../../assets/img/theme/eo.png\" src=\"../../assets/img/theme/EO_Final.mp4\" type=\"video/mp4\"\r\n                controls></video>\r\n               \r\n                <!-- <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div> -->\r\n              </div>\r\n              <p class=\"lead text-center text-white\">Emergency Order Demo</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\"> -->\r\n      <!-- <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    <!-- </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  <!-- </section> -->\r\n  <!-- <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>  -->\r\n  <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n</main>\r\n");

/***/ }),

/***/ "SsEH":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T9bN":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sections.component.html */ "kQxL");
/* harmony import */ var _sections_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections.component.css */ "UiAr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent.ctorParameters = function () { return []; };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sections',
            template: _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sections_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "UiAr":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VhEO":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ "bygX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "W706":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation-section.component.html */ "z2zG");
/* harmony import */ var _navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-section.component.css */ "SsEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent.ctorParameters = function () { return []; };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation-section',
            template: _raw_loader_navigation_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "XT1+":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./inputs-section.component.html */ "9+np");
/* harmony import */ var _inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs-section.component.css */ "KKlp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent.ctorParameters = function () { return []; };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inputs-section',
            template: _raw_loader_inputs_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_inputs_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "XZey":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prodct3/prodct3.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<main>\n    <div class=\"position-relative\">\n      \n      <!-- shape Hero -->\n      <section class=\"section\" style=\"background-image: url(../../assets/img/theme/ICC\\ portal\\ backgroud.JPG);\">\n        <!-- <div class=\"shape shape-style-1 shape-default\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div> -->\n        <div class=\"container py-lg-md d-flex\">\n          <div class=\"col px-0\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;\">THE MOST EXHILLARATING UX\n                  <span>FOR UTILITIES</span>\n                </h1>\n                <p class=\"lead  text-white\">UX Application that works as simple as mobile App.Customer service, portal, IVR, chatbot can be integrated seamlessly </p>\n                <div class=\"btn-wrapper\">\n                  <a  class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\n                    <span class=\"btn-inner--text\">Learn More</span>\n                  </a>\n                  <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                    <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                    <span class=\"btn-inner--text\">Request Demo</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"card\" style=\"margin-top:40px;border: none;\">\n                  <video  poster=\"../../assets/img/theme/Contract.png\" src=\"../../assets/img/theme/Contract_final.mp4\" type=\"video/mp4\"\n                  controls></video>\n                 \n                  <!-- <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title</h5>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                  </div> -->\n                </div>\n                <p class=\"lead text-center text-white\">Contract Demo</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- SVG separator -->\n        <div class=\"separator separator-bottom separator-skew\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n        </div>\n      </section>\n      <!-- 1st Hero Variation -->\n    </div>\n    <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\n      <div class=\"container\"> -->\n        <!-- <div class=\"row justify-content-center\">\n          <div class=\"col-lg-12\">\n            <div class=\"row row-grid\">\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                      <i class=\"ni ni-check-bold\"></i>\n                    </div>\n                    <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-primary\">angular</span>\n                      <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\n                      <span class=\"badge badge-pill badge-primary\">creative</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                      <i class=\"ni ni-istanbul\"></i>\n                    </div>\n                    <h6 class=\"text-success text-uppercase\">Build Something</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-success\">business</span>\n                      <span class=\"badge badge-pill badge-success\">vision</span>\n                      <span class=\"badge badge-pill badge-success\">success</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\n                      <i class=\"ni ni-planet\"></i>\n                    </div>\n                    <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-warning\">marketing</span>\n                      <span class=\"badge badge-pill badge-warning\">product</span>\n                      <span class=\"badge badge-pill badge-warning\">launch</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n      <!-- </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6 order-md-2\">\n            <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\n          </div>\n          <div class=\"col-md-6 order-md-1\">\n            <div class=\"pr-md-5\">\n              <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\n                <i class=\"ni ni-settings-gear-65\"></i>\n              </div>\n              <h3>Awesome features</h3>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-settings-gear-65\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Carefully crafted components</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-html5\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Amazing page examples</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-satisfied\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Super friendly support team</h6>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section bg-secondary\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6\">\n            <div class=\"card bg-default shadow border-0\">\n              <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\n              <blockquote class=\"card-blockquote\">\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\n                </svg>\n                <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\n                <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\n              </blockquote>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\n                <i class=\"ni ni-settings\"></i>\n              </div>\n              <h3>Our customers</h3>\n              <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section pb-0 bg-gradient-warning\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\n            <div class=\"position-relative pl-md-5\">\n              <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 order-lg-1\">\n            <div class=\"d-flex px-3\">\n              <div>\n                <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                  <i class=\"ni ni-building text-primary\"></i>\n                </div>\n              </div>\n              <div class=\"pl-4\">\n                <h4 class=\"display-3 text-white\">Modern Interface</h4>\n                <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n              </div>\n            </div>\n            <div class=\"card shadow shadow-lg--hover mt-5\">\n              <div class=\"card-body\">\n                <div class=\"d-flex px-3\">\n                  <div>\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-4\">\n                    <h5 class=\"title text-success\">Awesome Support</h5>\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                    <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card shadow shadow-lg--hover mt-5\">\n              <div class=\"card-body\">\n                <div class=\"d-flex px-3\">\n                  <div>\n                    <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-4\">\n                    <h5 class=\"title text-warning\">Modular Components</h5>\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                    <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <!-- SVG separator -->\n      <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center text-center mb-lg\">\n          <div class=\"col-lg-8\">\n            <h2 class=\"display-3\">The amazing Team</h2>\n            <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Ryan Tompson</span>\n                  <small class=\"h6 text-muted\">Web Developer</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Romina Hadid</span>\n                  <small class=\"h6 text-muted\">Marketing Strategist</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Alexander Smith</span>\n                  <small class=\"h6 text-muted\">UI/UX Designer</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">John Doe</span>\n                  <small class=\"h6 text-muted\">Founder and CEO</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg pt-0\">\n      <div class=\"container\">\n        <div class=\"card bg-gradient-warning shadow-lg border-0\">\n          <div class=\"p-5\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-8\">\n                <h3 class=\"text-white\">We made website building easier for you.</h3>\n                <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\n              </div>\n              <div class=\"col-lg-3 ml-lg-auto\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    <!-- </section> -->\n    <!-- <section class=\"section section-lg bg-gradient-default\">\n      <div class=\"container pt-lg pb-300\">\n        <div class=\"row text-center justify-content-center\">\n          <div class=\"col-lg-10\">\n            <h2 class=\"display-3 text-white\">Build something</h2>\n            <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\n          </div>\n        </div>\n        <div class=\"row row-grid mt-5\">\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-settings text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Building tools</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-ruler-pencil text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Grow your market</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-atom text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Launch time</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n        </div>\n      </div>\n       SVG separator -->\n      <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>  -->\n    <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center mt--300\">\n          <div class=\"col-lg-8\">\n            <div class=\"card bg-gradient-secondary shadow\">\n              <div class=\"card-body p-lg-5\">\n                <h4 class=\"mb-1\">Want to work with us?</h4>\n                <p class=\"mt-0\">Your project is very important to us.</p>\n                <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"form-group mb-4\">\n                  <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                </div>\n                <div>\n                  <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-center\">\n          <div class=\"col-lg-8 text-center\">\n            <h2 class=\"display-3\">Do you love this awesome\n              <span class=\"text-success\">Design System for Angular?</span>\n            </h2>\n            <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n            <div class=\"btn-wrapper\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n            </div>\n            <div class=\"text-center\">\n              <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n  </main>\n  \n");

/***/ }),

/***/ "XsTM":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "T9bN");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "K4CT");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "XT1+");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "0cls");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "W706");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "FCdR");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "jyux");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "0KVf");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "abin");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "aZjO");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "KuAA");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "+XXu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "YSaL":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _prodct2_prodct2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prodct2/prodct2.component */ "6dFm");
/* harmony import */ var _prodct3_prodct3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prodct3/prodct3.component */ "pZk7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _prodct2_prodct2_component__WEBPACK_IMPORTED_MODULE_12__["Prodct2Component"],
                _prodct3_prodct3_component__WEBPACK_IMPORTED_MODULE_13__["Prodct3Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aScS":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "aZjO":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleo-section.component.html */ "QaPg");
/* harmony import */ var _nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleo-section.component.css */ "OK6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent.ctorParameters = function () { return []; };
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleo-section',
            template: _raw_loader_nucleo_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleo_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "abin":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./angular-section.component.html */ "9W4q");
/* harmony import */ var _angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-section.component.css */ "tALr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }
    ]; };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-angular-section',
            template: _raw_loader_angular_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_angular_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _prodct2_prodct2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prodct2/prodct2.component */ "6dFm");
/* harmony import */ var _prodct3_prodct3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prodct3/prodct3.component */ "pZk7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'prodct2', component: _prodct2_prodct2_component__WEBPACK_IMPORTED_MODULE_7__["Prodct2Component"] },
    { path: 'prodct3', component: _prodct3_prodct3_component__WEBPACK_IMPORTED_MODULE_8__["Prodct3Component"] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bygX":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-bordera {\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixnQ0FBQTtBQUNBIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYm9yZGVyYSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjMwcHg7ICBcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjMwcHg7XHJcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjMwcHg7IFxyXG4gICAgfVxyXG4gICAgIl19 */");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "XsTM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "eDb9":
/*!***********************************************!*\
  !*** ./src/app/prodct2/prodct2.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kY3QyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "eo/P":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/crs-section/crs-section.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!-- Custom controls -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <!-- Checkboxes -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\r\n          <label class=\"custom-control-label\" for=\"customCheck2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck3\">\r\n            <span>Disabled Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck4\">\r\n            <span>Disabled Checked</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Radio buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio3\">\r\n            <span>Disabled unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio4\">\r\n            <span>Disabled checkbox</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Toggle buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\r\n        </div>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n        <span class=\"clearfix\"></span>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\r\n        </div>\r\n        <!-- Simple slider -->\r\n        <div class=\"input-slider-container\">\r\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\r\n        </div>\r\n        <!-- Range slider -->\r\n        <div class=\"mt-5\">\r\n          <!-- Range slider container -->\r\n          <div id=\"input-slider-range\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mt-md\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Menu -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n                        <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-favourite-28\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-notification-70\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gFCd":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "htC0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/typography-section/typography-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Typography</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h5 class=\"mb-0\">Argon Design System </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h6 class=\"mb-0\">Argon Design System </h6>\r\n    </div>\r\n  </div>\r\n  <!-- Display titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <!-- Specialized titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div>\r\n        <h2 class=\"display-3\">Header with small subtitle </h2>\r\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Paragraphs -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in\r\n          <cite title=\"Source Title\">Source Title</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <!-- Images -->\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Images</span>\r\n  </h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\r\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\r\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\r\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\r\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n  <div class=\"container container-lg\" *ngIf=\"getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-5 mb-md-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/landing']\" title=\"Landing Page\">\r\n            <img src=\"./assets/img/theme/landing.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-5 mb-lg-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/user-profile']\" title=\"Profile Page\">\r\n            <img src=\"./assets/img/theme/profile.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\r\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\r\n      </div>\r\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-dribbble\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n          <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Creative Tim</a>.\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-footer justify-content-end\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com/presentation?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">About Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"http://blog.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer> -->\r\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "jyux":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./alerts-section.component.html */ "HiAf");
/* harmony import */ var _alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-section.component.css */ "VhEO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsSectionComponent.ctorParameters = function () { return []; };
    AlertsSectionComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-alerts-section',
            template: _raw_loader_alerts_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_alerts_section_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "kQxL":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-buttons-section></app-buttons-section>\r\n<app-inputs-section></app-inputs-section>\r\n<app-crs-section></app-crs-section>\r\n<app-navigation-section></app-navigation-section>\r\n<section class=\"section section-components\">\r\n  <app-tabs-section></app-tabs-section>\r\n  <app-alerts-section></app-alerts-section>\r\n  <app-typography-section></app-typography-section>\r\n  <app-angular-section></app-angular-section>\r\n</section>\r\n<section class=\"section section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\" class=\"btn btn-white mt-4\">See all components</a>\r\n      </div>\r\n      <div class=\"col-lg-6 mb-lg-auto\">\r\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n          <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n              </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-nucleo-section></app-nucleo-section>\r\n<section class=\"section section-lg section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row row-grid justify-content-between align-items-center\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"display-3 text-white\">A beautiful Design System\r\n          <span class=\"text-white\">completed with examples</span>\r\n        </h3>\r\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\r\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 mb-lg-auto\">\r\n        <div class=\"transform-perspective-right\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-versions-section></app-versions-section>\r\n");

/***/ }),

/***/ "kbRT":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n");

/***/ }),

/***/ "lHyI":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prodct2/prodct2.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<main>\n    <div class=\"position-relative\">\n      \n      <!-- shape Hero -->\n      <section class=\"section\" style=\"background-image: url(../../assets/img/theme/ICC\\ portal\\ backgroud.JPG);\">\n        <!-- <div class=\"shape shape-style-1 shape-default\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div> -->\n        <div class=\"container py-lg-md d-flex\">\n          <div class=\"col px-0\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;\">THE MOST EXHILLARATING UX\n                  <span>FOR UTILITIES</span>\n                </h1>\n                <p class=\"lead  text-white\">UX Application that works as simple as mobile App.Customer service, portal, IVR, chatbot can be integrated seamlessly </p>\n                <div class=\"btn-wrapper\">\n                  <a  class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\n                    <span class=\"btn-inner--text\">Learn More</span>\n                  </a>\n                  <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                    <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                    <span class=\"btn-inner--text\">Request Demo</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"card\" style=\"margin-top:40px;border: none;\">\n                  <video  poster=\"../../assets/img/theme/Home Extended.png\" src=\"../../assets/img/theme/Home Extended Final.mp4\" type=\"video/mp4\"\n                  controls></video>\n                 \n                  <!-- <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title</h5>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                  </div> -->\n                </div>\n                <p class=\"lead text-center text-white\">Home Extended Demo</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- SVG separator -->\n        <div class=\"separator separator-bottom separator-skew\">\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n          </svg>\n        </div>\n      </section>\n      <!-- 1st Hero Variation -->\n    </div>\n    <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\n      <div class=\"container\"> -->\n        <!-- <div class=\"row justify-content-center\">\n          <div class=\"col-lg-12\">\n            <div class=\"row row-grid\">\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                      <i class=\"ni ni-check-bold\"></i>\n                    </div>\n                    <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-primary\">angular</span>\n                      <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\n                      <span class=\"badge badge-pill badge-primary\">creative</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                      <i class=\"ni ni-istanbul\"></i>\n                    </div>\n                    <h6 class=\"text-success text-uppercase\">Build Something</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-success\">business</span>\n                      <span class=\"badge badge-pill badge-success\">vision</span>\n                      <span class=\"badge badge-pill badge-success\">success</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"card card-lift--hover shadow border-0\">\n                  <div class=\"card-body py-5\">\n                    <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\n                      <i class=\"ni ni-planet\"></i>\n                    </div>\n                    <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\n                    <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                    <div>\n                      <span class=\"badge badge-pill badge-warning\">marketing</span>\n                      <span class=\"badge badge-pill badge-warning\">product</span>\n                      <span class=\"badge badge-pill badge-warning\">launch</span>\n                    </div>\n                    <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> -->\n      <!-- </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6 order-md-2\">\n            <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\n          </div>\n          <div class=\"col-md-6 order-md-1\">\n            <div class=\"pr-md-5\">\n              <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\n                <i class=\"ni ni-settings-gear-65\"></i>\n              </div>\n              <h3>Awesome features</h3>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-settings-gear-65\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Carefully crafted components</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-html5\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Amazing page examples</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"ni ni-satisfied\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h6 class=\"mb-0\">Super friendly support team</h6>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section bg-secondary\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6\">\n            <div class=\"card bg-default shadow border-0\">\n              <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\n              <blockquote class=\"card-blockquote\">\n                <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\n                  <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\n                  <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\n                </svg>\n                <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\n                <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\n              </blockquote>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\n                <i class=\"ni ni-settings\"></i>\n              </div>\n              <h3>Our customers</h3>\n              <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section pb-0 bg-gradient-warning\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\n            <div class=\"position-relative pl-md-5\">\n              <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 order-lg-1\">\n            <div class=\"d-flex px-3\">\n              <div>\n                <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                  <i class=\"ni ni-building text-primary\"></i>\n                </div>\n              </div>\n              <div class=\"pl-4\">\n                <h4 class=\"display-3 text-white\">Modern Interface</h4>\n                <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n              </div>\n            </div>\n            <div class=\"card shadow shadow-lg--hover mt-5\">\n              <div class=\"card-body\">\n                <div class=\"d-flex px-3\">\n                  <div>\n                    <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-4\">\n                    <h5 class=\"title text-success\">Awesome Support</h5>\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                    <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card shadow shadow-lg--hover mt-5\">\n              <div class=\"card-body\">\n                <div class=\"d-flex px-3\">\n                  <div>\n                    <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-4\">\n                    <h5 class=\"title text-warning\">Modular Components</h5>\n                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                    <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <!-- SVG separator -->\n      <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center text-center mb-lg\">\n          <div class=\"col-lg-8\">\n            <h2 class=\"display-3\">The amazing Team</h2>\n            <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Ryan Tompson</span>\n                  <small class=\"h6 text-muted\">Web Developer</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Romina Hadid</span>\n                  <small class=\"h6 text-muted\">Marketing Strategist</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">Alexander Smith</span>\n                  <small class=\"h6 text-muted\">UI/UX Designer</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n            <div class=\"px-4\">\n              <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n              <div class=\"pt-4 text-center\">\n                <h5 class=\"title\">\n                  <span class=\"d-block mb-1\">John Doe</span>\n                  <small class=\"h6 text-muted\">Founder and CEO</small>\n                </h5>\n                <div class=\"mt-3\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-facebook\"></i>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg pt-0\">\n      <div class=\"container\">\n        <div class=\"card bg-gradient-warning shadow-lg border-0\">\n          <div class=\"p-5\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-8\">\n                <h3 class=\"text-white\">We made website building easier for you.</h3>\n                <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\n              </div>\n              <div class=\"col-lg-3 ml-lg-auto\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    <!-- </section> -->\n    <!-- <section class=\"section section-lg bg-gradient-default\">\n      <div class=\"container pt-lg pb-300\">\n        <div class=\"row text-center justify-content-center\">\n          <div class=\"col-lg-10\">\n            <h2 class=\"display-3 text-white\">Build something</h2>\n            <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\n          </div>\n        </div>\n        <div class=\"row row-grid mt-5\">\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-settings text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Building tools</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-ruler-pencil text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Grow your market</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n              <i class=\"ni ni-atom text-primary\"></i>\n            </div>\n            <h5 class=\"text-white mt-3\">Launch time</h5>\n            <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n          </div>\n        </div>\n      </div>\n       SVG separator -->\n      <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>  -->\n    <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center mt--300\">\n          <div class=\"col-lg-8\">\n            <div class=\"card bg-gradient-secondary shadow\">\n              <div class=\"card-body p-lg-5\">\n                <h4 class=\"mb-1\">Want to work with us?</h4>\n                <p class=\"mt-0\">Your project is very important to us.</p>\n                <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"form-group mb-4\">\n                  <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                </div>\n                <div>\n                  <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section class=\"section section-lg\">\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-center\">\n          <div class=\"col-lg-8 text-center\">\n            <h2 class=\"display-3\">Do you love this awesome\n              <span class=\"text-success\">Design System for Angular?</span>\n            </h2>\n            <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n            <div class=\"btn-wrapper\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n            </div>\n            <div class=\"text-center\">\n              <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n                <div class=\"col-lg-2 col-4\">\n                  <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                    <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n  </main>\n  \n");

/***/ }),

/***/ "m1bB":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/buttons-section/buttons-section.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-components pb-0\" id=\"section-components\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Basic elements -->\r\n        <h2 class=\"mb-5\">\r\n          <span>Basic Elements</span>\r\n        </h2>\r\n        <!-- Buttons -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\r\n        <!-- Button styles -->\r\n        <div>\r\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n            <span class=\"btn-inner--text\">With icon</span>\r\n          </button>\r\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n          </button>\r\n          <!-- Button wizes -->\r\n          <div class=\"mb-3 mt-5\">\r\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\r\n          </div>\r\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\r\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\r\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\r\n        </div>\r\n        <!-- Button colors -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\r\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\r\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\r\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\r\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\r\n        <!-- Button links -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "pZk7":
/*!**********************************************!*\
  !*** ./src/app/prodct3/prodct3.component.ts ***!
  \**********************************************/
/*! exports provided: Prodct3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodct3Component", function() { return Prodct3Component; });
/* harmony import */ var _raw_loader_prodct3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./prodct3.component.html */ "XZey");
/* harmony import */ var _prodct3_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prodct3.component.css */ "PwEl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prodct3Component = /** @class */ (function () {
    function Prodct3Component() {
    }
    Prodct3Component.prototype.ngOnInit = function () {
    };
    Prodct3Component.ctorParameters = function () { return []; };
    Prodct3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-prodct3',
            template: _raw_loader_prodct3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_prodct3_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], Prodct3Component);
    return Prodct3Component;
}());



/***/ }),

/***/ "tALr":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<main>\r\n  <div class=\"position-relative\">\r\n    \r\n    <!-- shape Hero -->\r\n    <section class=\"section\" style=\"background-image: url(../../assets/img/theme/ICC\\ portal\\ backgroud.JPG);\">\r\n      <!-- <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div> -->\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-5 bold text-white\" style=\"font-weight: 900;\">THE MOST EXHILLARATING UX\r\n                <span>FOR UTILITIES</span>\r\n              </h1>\r\n              <p class=\"lead  text-white\">UX Application that works as simple as mobile App.Customer service, portal, IVR, chatbot can be integrated seamlessly </p>\r\n              <div class=\"btn-wrapper\">\r\n                <a  class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\r\n                  <span class=\"btn-inner--text\">Learn More</span>\r\n                </a>\r\n                <a class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n                  <span class=\"btn-inner--text\">Request Demo</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"card\" style=\"margin-top:40px;border: none;\">\r\n                <video  poster=\"../../assets/img/theme/eo.png\" src=\"../../assets/img/theme/EO_Final.mp4\" type=\"video/mp4\"\r\n                controls></video>\r\n               \r\n                <!-- <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div> -->\r\n              </div>\r\n              <p class=\"lead text-center text-white\">Emergency Order Demo</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\"> -->\r\n      <!-- <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-check-bold\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\r\n                    <i class=\"ni ni-istanbul\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-success\">business</span>\r\n                    <span class=\"badge badge-pill badge-success\">vision</span>\r\n                    <span class=\"badge badge-pill badge-success\">success</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-planet\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\r\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\r\n                  <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    <!-- </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-md-2\">\r\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n            </div>\r\n            <h3>Awesome features</h3>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-settings-gear-65\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-html5\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"ni ni-satisfied\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\r\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>Our customers</h3>\r\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\r\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\r\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-success\">Awesome Support</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Modular Components</h5>\r\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center text-center mb-lg\">\r\n        <div class=\"col-lg-8\">\r\n          <h2 class=\"display-3\">The amazing Team</h2>\r\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\r\n                <small class=\"h6 text-muted\">Web Developer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Romina Hadid</span>\r\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">Alexander Smith</span>\r\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\r\n          <div class=\"px-4\">\r\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\r\n            <div class=\"pt-4 text-center\">\r\n              <h5 class=\"title\">\r\n                <span class=\"d-block mb-1\">John Doe</span>\r\n                <small class=\"h6 text-muted\">Founder and CEO</small>\r\n              </h5>\r\n              <div class=\"mt-3\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\r\n                  <i class=\"fa fa-dribbble\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg pt-0\">\r\n    <div class=\"container\">\r\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\r\n        <div class=\"p-5\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-8\">\r\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\r\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\r\n            </div>\r\n            <div class=\"col-lg-3 ml-lg-auto\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  <!-- </section> -->\r\n  <!-- <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">Build something</h2>\r\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Building tools</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h5 class=\"text-white mt-3\">Launch time</h5>\r\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n     SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>  -->\r\n  <!-- <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to work with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n          <div class=\"btn-wrapper\">\r\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n</main>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z2zG":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"\">\r\n  <div class=\"container\">\r\n    <!-- Navigation -->\r\n    <h2 class=\"mb-5\">\r\n      <span>Navbars</span>\r\n    </h2>\r\n  </div>\r\n  <!-- Navbar default -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-notification-70\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar primary -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar success -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar danger -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar warning -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-pinterest\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar info -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</section>\r\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\"\r\n  class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\r\n      <!-- <img src=\"../../../assets/img/theme/Logo Final.jpg\"> -->\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse nav-bordera\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\"\r\n      style=\"background:white\">\r\n      <!-- <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/home']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret \" routerLinkActive=\"active\" data-toggle=\"dropdown\" role=\"button\" [routerLink]=\"['/landing']\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Home</span>\r\n          </a>\r\n          <!-- <div class=\"dropdown-menu-xl dropdown-menu\" >\r\n            <div class=\"dropdown-menu-inner\">li.<active-class> > a {\r\n   border-bottom:1px solid white;\r\n}\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-palette\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div> -->\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" routerLinkActive=\"active\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\" ></i>\r\n            <span class=\"nav-link-inner--text\" >Products</span>\r\n            <i class=\"fa fa-caret-down\" style=\"margin-left: 2px;\"></i>\r\n          </a> \r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/home']\" routerLinkActive=\"active\" class=\"dropdown-item\">product1</a>\r\n            <a [routerLink]=\"['/prodct2']\" routerLinkActive=\"active\" class=\"dropdown-item\">product2</a>\r\n            <a [routerLink]=\"['/prodct3']\" routerLinkActive=\"active\" class=\"dropdown-item\">product3</a>\r\n            <a [routerLink]=\"['/landing']\" routerLinkActive=\"active\" class=\"dropdown-item\">product4</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\" ></i>\r\n            <span class=\"nav-link-inner--text\" >Solutions</span>\r\n            <i class=\"fa fa-caret-down\" style=\"margin-left: 2px;\"></i>\r\n          </a> \r\n          <div class=\"dropdown-menu\">\r\n            <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">prodct1</a>\r\n            <a [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">prodct1</a>\r\n            <a [routerLink]=\"['/login']\" class=\"dropdown-item\">prodct1</a>\r\n            <a [routerLink]=\"['/register']\" class=\"dropdown-item\">prodct1</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret \" routerLinkActive=\"active\" data-toggle=\"dropdown\" role=\"button\" [routerLink]=\"['/user-profile']\">\r\n            <i class=\"ni ni-collection d-lg-none\" [routerLink]=\"['/profile']\"></i>\r\n            <span class=\"nav-link-inner--text\" [routerLink]=\"['/profile']\">Methodology</span>\r\n            <!-- <i class=\"fa fa-caret-down\" ></i> -->\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-collection d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Contact</span>\r\n            <!-- <i class=\"fa fa-caret-down\" ></i> -->\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.facebook.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Like us on Facebook\">\r\n            <i class=\"fa fa-facebook-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.instagram.com/creativetimofficial\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\">\r\n            <i class=\"fa fa-instagram\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://twitter.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Twitter\">\r\n            <i class=\"fa fa-twitter-square\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-link-icon\" href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Star us on Github\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\r\n          </a>\r\n        </li> -->\r\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\r\n          <a target=\"_blank\" class=\"btn btn-neutral btn-icon\" style=\"background: orangered;\">\r\n            <span class=\"btn-inner--icon\">\r\n              <!-- <i class=\"fa fa-cloud-download mr-2\"></i> -->\r\n            </span>\r\n            <span class=\"nav-link-inner--text\" style=\"color: black;\">Request Demo</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Argon Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map