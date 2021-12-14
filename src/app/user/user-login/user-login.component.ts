import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { User } from '../user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, OnDestroy {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private sys: SystemService, private router: Router, private usersvc: UserService) { }

  get isAdmin() { return this.sys.getLoggedInUser().isAdmin; }
  
  login(): void{
    console.warn("Username/Password injected");
    this.sys.clearLoggedInUser();
    this.usersvc.login(this.username, this.password).subscribe({
      next: res => {
        console.debug(`Login successful for username ${this.username}`);
        this.sys.setLoggedInUser(res as User);
        this.router.navigateByUrl("/users/list");
      },
      error: err => {
        if(err.error.status == 404){
          this.message = "Username/Password not found!";
          return;
        }
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
    console.debug("ngOnInit()");
    // this.username = this.password = "sa";
  }

  ngOnDestroy(): void{

  }

}
