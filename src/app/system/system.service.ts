import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from '../app-init.service';
import { User } from '../user/user.class';

const EmptyUser = new User();

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loginRequired!: boolean;

  _loggedInUser: User = EmptyUser;
  getLoggedInUser(): User {
    return this._loggedInUser;
  }

  setLoggedInUser(user: User): void {
    this._loggedInUser = user;
  }

  chkLoggedIn(){
    if(!this.loginRequired){
      console.warn("Warning: Forced login turned off");
      return;
    }
    if(this.getLoggedInUser() === EmptyUser){
      this.router.navigateByUrl("/users/login")
    }
  }

  clearLoggedInUser(): void{
    this.setLoggedInUser(EmptyUser);
  }

  constructor(private router: Router, private init: AppInitService) { 
    this.loginRequired = init.config.loginRequired;
  }
}
