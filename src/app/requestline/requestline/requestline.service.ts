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

    getByPk(id: number): Observable<Requestline>{
      return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
    }

    create(requestline: Requestline): Observable<Requestline>{
      return this.httpsvc.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
    }

    change(requestline: Requestline): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>;
    }

    remove(id: number): Observable<any>{
        return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }
}
