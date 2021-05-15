import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citoyen } from './citoyen';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  private baseURL='http://localhost:9191/Citoyen';

  constructor( private httpClient: HttpClient) { }

  getCitoyensList(): Observable<Citoyen[]>{
    return this.httpClient.get<Citoyen[]>(`${this.baseURL}`);
  }

  createCitoyen(citoyen:Citoyen):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,citoyen);
  }

  getCitoyenById(idCitoyen:number):Observable<Citoyen>{
    return this.httpClient.get<Citoyen>(`${this.baseURL}/${idCitoyen}`);
  }

  updateCitoyen(idCitoyen:number,citoyen:Citoyen):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idCitoyen}`,citoyen);
  }

  deleteCitoyen(idCitoyen:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idCitoyen}`);

  }
}
