import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = "http://localhost:21959/api/requests";

    constructor(
        private httpsvc: HttpClient
    ) { }

    list(): Observable<Request[]> {
        return this.httpsvc.get(`${this.baseurl}`) as Observable<Request[]>
    }

    getByPk(id: number): Observable<Request>{
      return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
}