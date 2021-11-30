import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from '../requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:21959/api/requestlines";

    constructor(
        private httpsvc: HttpClient
    ) { }

    list(): Observable<Requestline[]> {
        return this.httpsvc.get(`${this.baseurl}`) as Observable<Requestline[]>
    }
}
