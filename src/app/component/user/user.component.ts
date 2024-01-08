import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: Observable<User[]>
  error!: string
  constructor(private userService: UserService, private route: Router) { }
  ngOnInit(): void {

    this.users = this.userService.getUsers()

  }
  deleteUser(id: number) {
    let confirmtion = confirm("Are you sure to delete the use")
    if (confirmtion) {
      this.userService.deleteUser(id).subscribe();
      this.users = this.userService.getUsers()
      return true
    } else {
      return false
    }
   
  }
  updateUser(id: number) {
    this.route.navigate(['/user', id])
  }
}
