import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  formProfile: FormGroup = null;
  isFormSubmitted = false;
  formData=null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formProfile = this.fb.group({
      'emailId' : ['j.dharmik.gondane@accenture.com',
      [Validators.required,Validators.email]]
    })
  }

  saveProfile(frm){
    if(frm.valid){
      this.isFormSubmitted = true;
      this.formData = frm.value;
      alert(this.formData.emailId);
    }
    else{
      this.isFormSubmitted = false;
      this.formData = null;
     
    }
  }


}
