import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // aBool: boolean = true;

  user!: User;

  constructor(private route: ActivatedRoute, private usersvc: UserService) { }

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
