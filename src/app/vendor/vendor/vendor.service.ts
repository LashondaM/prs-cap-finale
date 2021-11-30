import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:21959/api/vendors";

    constructor(
        private httpsvc: HttpClient
    ) { }

    list(): Observable<Vendor[]> {
        return this.httpsvc.get(`${this.baseurl}`) as Observable<Vendor[]>
    }

    getByPk(id: number): Observable<Vendor>{
      return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
}
