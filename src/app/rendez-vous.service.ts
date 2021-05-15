import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from './rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private baseURL='http://localhost:9191/RendezVous';

  constructor(  private httpClient: HttpClient) { }

  getRdVList(): Observable<RendezVous[]>{
    return this.httpClient.get<RendezVous[]>(`${this.baseURL}`);
  }

  createRdv(rdv:RendezVous):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,rdv);
  }

  getRdvById(idRDV:number):Observable<RendezVous>{
    return this.httpClient.get<RendezVous>(`${this.baseURL}/${idRDV}`);
  }

  updateRdv(idRDV:number,rdv:RendezVous):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idRDV}`,rdv);
  }

  deleteRdv(idRDV:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idRDV}`);
  }

}
