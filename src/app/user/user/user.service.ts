import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.class';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseurl: string = "http://localhost:21959/api/users";

    constructor(
        private httpsvc: HttpClient
    ) { }

    list(): Observable<User[]> {
        return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>
    }

    getByPk(id: number): Observable<User>{
        return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>;
    }
}
