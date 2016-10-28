"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AppComponent = (function () {
    function AppComponent(fb) {
        this.attemptsDatabase = [];
        this.complexForm = fb.group({
            'userInput': [null, forms_1.Validators.compose([forms_1.Validators.required, this.validateWithinRange])]
        });
        this.hiddenValue = 15;
    }
    AppComponent.prototype.validateWithinRange = function (control) {
        var parsedValue = parseInt(control.value);
        if (parsedValue >= 10 && parsedValue <= 20) {
            return null;
        }
        else {
            return { validateWithinRange: true };
        }
    };
    AppComponent.prototype.submitForm = function (value) {
        this.userInput = this.complexForm.controls['userInput'];
        this.attemptsDatabase.push(this.userInput.value);
        if (this.hiddenValue === this.userInput.value) {
            alert("Matched!!! ");
            this.attemptsDatabase = [];
        }
        else {
            alert("Failed!!!... Attempt count: " + this.attemptsDatabase.length);
        }
        console.log(this.userInput.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map