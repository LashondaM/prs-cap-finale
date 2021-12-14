import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class'
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(private reqs: RequestService) { }

  ngOnInit(): void {
    this.reqs.list().subscribe(
      res => {
        console.debug("Requests:", res)
        this.requests = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
