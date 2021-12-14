import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  verifyDelete: boolean = false;

  request!: Request;

  constructor(private route: ActivatedRoute, private requestsvc: RequestService, private router: Router) { }

  delete(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  verify(): void{
    this.requestsvc.remove(this.request.id).subscribe({
      next: res => {
        console.debug("Request deleted successfully!");
        this.router.navigateByUrl("/requests/list");
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
