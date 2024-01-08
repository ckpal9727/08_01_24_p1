import { HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:any=''
  loginForm!:FormGroup
  isLoading:boolean=false
  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {

    this.loginForm= new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    })
    
  }
  onSubmit(){
    this.isLoading=true
    this.userService.auth(this.loginForm.value.email,this.loginForm.value.password).pipe(
      catchError((err)=>{
        this.error=this.userService.handleError(err)        
        this.isLoading=false
        return err
      })     
    ).
    subscribe((data)=>{
      this.router.navigate(['/user'])
      this.isLoading=false
    },    
    )
  }
}
