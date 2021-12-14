import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  request!: Request;

  statusStyle: string = "bold";

  constructor(private reqs: RequestService, private reql: RequestlineService, private route: ActivatedRoute, private router: Router) { }

  approve(request: Request): void {
    request.rejectionReason = "";
    this.reqs.approve(request).subscribe({
      next: reqs => {
        console.debug("Request approved successfully!");
        this.refresh();
      }
    });
  }
  showRejection: boolean = false;
  showRejectionReason(): void {
    this.showRejection = !this.showRejection;
  }
  reject(request: Request): void {
    this.reqs.reject(request).subscribe({
      next: reqs => {
        console.debug("Request rejected successfully!");
        this.refresh();
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqs.getByPk(id).subscribe({
      next: res => {
        console.debug("Request:", res as Request);
        this.request = res as Request;
        this.request.username = this.request.user !== undefined ? this.request.user.username : "missing";
      },
      error: err => {
        console.error("Trap error:", err);
      }
    });
  }

  review(request: Request): void {
    this.reqs.review(request).subscribe({
      next: res => {
        console.debug("Request reviewed successfully!");
        this.refresh();
      }
    })
  }

  ngOnInit(): void {
    this.refresh();
  }

}
