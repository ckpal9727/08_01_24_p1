import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { passwordFormateCheck } from '../sign-up/password.validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  constructor(private userService:UserService,private activateRoute:ActivatedRoute,private router:Router){}
  userUpdate!:FormGroup

  ngOnInit(): void {
    this.userUpdate = new FormGroup({
      id: new FormControl(''), // You might want to hide this or remove it if it's not editable
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        streetName: new FormControl(''),
        streetNumber: new FormControl('')
      })
    });
    this.activateRoute.params.subscribe((data)=>{
      this.userService.getUser(data['id']).subscribe((data)=>{
        this.userUpdate.patchValue(data)
      })
    })
   
  }

  //Submitting form
  onSubmit(){
    console.log()
    this.userService.updateUser(this.userUpdate.value.id,this.userUpdate.value).subscribe((data)=>{
      console.log(data)
    })
    this.userService.getUsers()
    this.router.navigate(['/user'])

  }

}