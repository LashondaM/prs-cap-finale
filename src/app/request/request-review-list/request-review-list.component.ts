import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private req: RequestService, private sys: SystemService) { }

  approve(request: Request): void {
    this.req.approve(request).subscribe({
      next: res => {
        console.debug("Request approved successfully!");
        this.router.navigateByUrl(`/requests/reviews`);
      }
    });
  }

  reject(request: Request): void {
    this.req.reject(request).subscribe({
      next: res => {
        console.debug("Request rejected successfully!");
        this.router.navigateByUrl(`/requests/reviews`);
      }
    });
  }

  

  // refresh(): void {
  //   let userId = this.sys.getLoggedInUser().id;
  //   this.req.reviews(userId).subscribe({
  //     next: res => {
  //       console.debug("Requests in review:", res);
  //       this.requests = res as Request[];
  //       this.requests.forEach(r => r.username = r.user !== undefined ? r.user.username : "missing!");
  //     },
  //     error: err => {
  //       console.error(err);
  //     }
  //   });
  // }

  ngOnInit(): void {
    let userId = this.sys._loggedInUser.id;
    this.req.reviews(userId).subscribe({
      next: res => {
        console.debug("Requests:", res)
        this.requests = res;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
