import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService=inject(UserService)
  // if(userService.auth('','')){
  //   return true
  // }

  // return false;
  return true
};
