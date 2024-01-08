import { Component } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';

export const formCheckGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  console.log(component.userSignUp.dirty + " " + component.updateUser.dirty)
  if (component.userSignUp.dirty  ) {
    const confirmation = confirm("Are you sure to exit");
    if (confirmation) {
      return true
    } else {
      false
    }

  } return false

};
