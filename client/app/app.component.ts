import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    complexForm: FormGroup;
    userInput: AbstractControl;
    attemptsDatabase = [];
    hiddenValue: number;

    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            'userInput': [null, Validators.compose([Validators.required, this.validateWithinRange])]
        })

        this.hiddenValue = 15;
    }

    validateWithinRange(control:AbstractControl) {

        let parsedValue = parseInt(control.value);

        if (parsedValue >=  10 &&  parsedValue <= 20)
        {
            return null;
        }else {
            return { validateWithinRange: true }
        }
    }

    submitForm(value: any) {

        this.userInput = this.complexForm.controls['userInput'];

        this.attemptsDatabase.push(this.userInput.value);

        if (this.hiddenValue === this.userInput.value)
        {
            alert("Matched!!! ");
            this.attemptsDatabase = [];
        }else {
            alert("Failed!!!... Attempt count: " + this.attemptsDatabase.length);
        }

        console.log(this.userInput.value);
    }
}
