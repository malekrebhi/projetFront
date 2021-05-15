import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentreVacc } from './centre-vacc';

@Injectable({
  providedIn: 'root'
})
export class CentreVaccService {

  private baseURL ='http://localhost:9191/Centre';

  constructor(  private httpClient: HttpClient ) { }

  getCentresList(): Observable<CentreVacc[]>{
    return this.httpClient.get<CentreVacc[]>(`${this.baseURL}`);
  }

  createCentre(centre:CentreVacc):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,centre);
  }

  getCentreById(idCentre:number):Observable<CentreVacc>{
    return this.httpClient.get<CentreVacc>(`${this.baseURL}/${idCentre}`);
  }

  updateCentre(idCentre:number,centre:CentreVacc):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idCentre}`,centre);
  }

  deleteCentre(idCentre:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idCentre}`);
  }
}
