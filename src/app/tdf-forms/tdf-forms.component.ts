import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.css']
})
export class TdfFormsComponent implements OnInit {
  userModel = {firstname:'',lastname:'',email:'',contact:''};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(userForm:NgForm){
    console.log(userForm);
    // console.log(this.userModel);
    if(userForm.form.status==="VALID"){
      console.log("valid");

    }
  }

}
