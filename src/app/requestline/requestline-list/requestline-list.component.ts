import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline/requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  requestlines: Requestline[] = []

  constructor(private usrsvc: RequestlineService) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      res => {
        console.debug("Requestlines:", res)
        this.requestlines = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
