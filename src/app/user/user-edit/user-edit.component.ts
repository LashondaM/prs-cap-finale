import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;

  constructor(private usersvc: UserService, private router: Router, private route: ActivatedRoute) { }

  save(): void{
    console.log("saved", this.user);
    this.usersvc.change(this.user).subscribe({
      next: res => {
        console.log("User changed successfully!");
        this.router.navigateByUrl("/users/list");
      },
      error: err => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usersvc.getByPk(id).subscribe({
      next: res => {
        this.user = res;
        console.log(res);
      }
    });
  }

}
