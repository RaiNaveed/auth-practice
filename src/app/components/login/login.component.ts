import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userLogInForm:any = FormGroup
  constructor(private service:AuthService, private FormBuilder:FormBuilder){this.userFormModel()}
  ngOnInit(){};

  userFormModel(){
    this.userLogInForm=this.FormBuilder.group({
      Email:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
  };
  loginFormSubmit(){
    let formValue = this.userLogInForm.value;
    this.service.userLogin(formValue).subscribe((response)=>{console.log(response)})
  }

}
