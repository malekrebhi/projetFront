import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from './administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private baseURL= "http://localhost:9191/Admin";



  constructor( private httpClient: HttpClient) { }

  getAdminsList(): Observable<Administrateur[]>{
    return this.httpClient.get<Administrateur[]>(`${this.baseURL}`);
  }

  createAdmin(admin:Administrateur):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,admin);
  }

  getAdminById(idAdmin:number):Observable<Administrateur>{
    return this.httpClient.get<Administrateur>(`${this.baseURL}/${idAdmin}`);
  }

  updateAdmin(idAdmin:number,admin:Administrateur):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idAdmin}`,admin);
  }
  
  deleteAdmin(idAdmin:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idAdmin}`);
    
  }

}
