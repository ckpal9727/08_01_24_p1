import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  User } from 'src/app/model/user.model';
import { passwordFormateCheck } from './password.validator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private userService:UserService,private router:Router){}
  userSignUp!:FormGroup
  ngOnInit(): void {
    this.userSignUp =new FormGroup({
      name : new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.email]),
      password: new FormControl(null,{validators:[passwordFormateCheck],updateOn:'blur'}),
      address: new FormGroup({
        streetName: new FormControl(null,),
      streetNumber: new FormControl(null), 
      })  
    })
  }

  //Submitting form
  onSubmit(){
    this.userService.addUser(this.userSignUp.value).subscribe((data)=>{
      
    })
    this.router.navigate(['/user'])
  }

}
