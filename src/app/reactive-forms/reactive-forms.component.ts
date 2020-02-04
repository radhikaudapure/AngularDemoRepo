import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm;

  registrationFormSubmitted=false;

  formErrors = {
    'userName': '',
    'password': '',
    'confirmPassword':'',
  };
  
  validationMessages = {
    'userName': {
      'required': 'Username is required.',
      'minlength':'minlength 5 required',
    },
    'password': {
      'required': 'Password is required.',
    },
    'confirmPassword':{
      'required': 'Confirm Password is required.',
    },
  };

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName :  new FormControl('',[Validators.required,Validators.minLength(5)]),
      password : new FormControl('',Validators.required),
      confirmPassword : new FormControl('',Validators.required),
    });
    
    // console.log(this.registrationForm);/
    this.registrationForm.valueChanges.subscribe((data) => {
    this.logValidationErrors(this.registrationForm);
    });

  }

  onRegister(){
    console.log(this.registrationForm);
    this.registrationFormSubmitted=true;
    this.logValidationErrors(this.registrationForm);
  }

  logValidationErrors(group: FormGroup = this.registrationForm): void {
    console.log('1..',group)
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && abstractControl.invalid 
        && (abstractControl.untouched || abstractControl.dirty) && this.registrationFormSubmitted) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
    });
  }

}
