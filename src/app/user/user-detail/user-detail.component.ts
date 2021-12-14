import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // aBool: boolean = true;

  verifyDelete: boolean = false;

  user!: User;

  constructor(private router: Router, private route: ActivatedRoute, private usersvc: UserService) { }

  delete(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  verify(): void{
    this.usersvc.remove(this.user.id).subscribe({
      next: res => {
        console.debug("User deleted successfully!");
        this.router.navigateByUrl("/users/list");
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
