
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

      create(request: Request): Observable<Request>{
        return this.httpsvc.post(`${this.baseurl}`, request) as Observable<Request>;
    }

    change(request: Request): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
    }

    reviews(userId: number): Observable<Request[]> {
      return this.httpsvc.get(`${this.baseurl}/reviews/${userId}`) as Observable<Request[]>;
    }

    // ======================================

    review(request: Request): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/review`, request) as Observable<any>;
    }
    approve(request: Request): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/approve`, request) as Observable<any>;
    }
    reject(request: Request): Observable<any> {
      return this.httpsvc.put(`${this.baseurl}/reject`, request) as Observable<any>;
    }

    remove(id: number): Observable<any>{
        return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }

}
