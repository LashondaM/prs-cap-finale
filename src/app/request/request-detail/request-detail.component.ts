import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;

  constructor(private route: ActivatedRoute, private requestsvc: RequestService) { }

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
