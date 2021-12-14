import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request;

  statusStyle: string = "bold";

  constructor(private reqs: RequestService, private reql: RequestlineService, private route: ActivatedRoute, private router: Router) { }

  editLine(id: number): void{
    this.router.navigateByUrl(`/requestlines/edit/${id}`);
  }

  deleteLine(id: number): void{
    this.reql.remove(id).subscribe({
      next: res => {
        console.debug("Requestline deleted successfully!");
        this.refresh();
        this.router.navigateByUrl(`/requests/lines/${this.request.id}`);
      }
    })
  }

  refresh(): void{
    let id = this.route.snapshot.params["id"];
    this.reqs.getByPk(id).subscribe({
      next: res => {
        console.debug("Request:", res as Request);
        this.request = res as Request;
        this.request.username = this.request.user !== undefined ? this.request.user.username : "missing";
        this.setStatusColor(this.request.status);
      },
      error: err => {
        console.error("Trap error:", err);
      }
    });
  }

  setStatusColor(status: string): void {
    if(status === "REVIEW") { this.statusStyle = "text-warning bold"; }
    if(status === "APPROVED") { this.statusStyle = "text-success bold"; }
    if(status === "REJECTED") { this.statusStyle = "text-danger bold"; }
    if(status === "EDIT") { this.statusStyle = "text-primary bold"; }
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
