import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userSignupForm:any = FormGroup
  constructor(private authService:AuthService, private FormBuilder:FormBuilder){this.userFormModel()};
  ngOnInit(){}

  userFormModel(){
    this.userSignupForm = this.FormBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
  };

  signupFormSubmit(){
   let formValue = this.userSignupForm.value;
   this.authService.userRegister(this.userSignupForm.value).subscribe((response)=>{console.log(response)})
  }


}
