import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  constructor(private usrsvc: UserService, private router: Router) { }

  save(): void{
    this.usrsvc.create(this.user).subscribe({
      next: res => {
        console.log(res);
        this.router.navigateByUrl("/users/list");
      }
    })
  }

  ngOnInit(): void {
  }

}
