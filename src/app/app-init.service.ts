import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const configFile = "./assets/config.json";

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;
  
  constructor(private httpsvc: HttpClient) { }

  async getSettings(): Promise<void>{
    let observe = this.httpsvc.get(configFile);
    this.config = await lastValueFrom(observe);
    console.debug("Config:", this.config);
  }
}
