import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from './personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private baseURL='http://localhost:9191/Personnel';

  constructor(  private httpClient: HttpClient) { }

  getPersonnelList(): Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`${this.baseURL}`);
  }

  createPersonnel(personnel:Personnel):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,personnel);
  }

  getPersonnelById(idPersonel:number):Observable<Personnel>{
    return this.httpClient.get<Personnel>(`${this.baseURL}/${idPersonel}`);
  }

  updatePersonnel(idPersonel:number,personnel:Personnel):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idPersonel}`,personnel);
  }

  deletePersonnel(idPersonel:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPersonel}`);
  }
}
