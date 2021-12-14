import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;

  constructor(private requestsvc: RequestService, private router: Router, private route: ActivatedRoute) { }

  save(): void{
    console.log("saved", this.request);
    this.requestsvc.change(this.request).subscribe({
      next: res => {
        console.log("Request changed successfully!");
        this.router.navigateByUrl("/requests/list");
      },
      error: err => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsvc.getByPk(id).subscribe({
      next: res => {
        this.request = res;
        console.log(res);
      }
    });
  }

}
