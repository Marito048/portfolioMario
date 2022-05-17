import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiurl="https://api-rest-portfolio-arpr.herokuapp.com/persona"

  constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`apiurl/${id}`);
	}

  //terminar en algun momento
  update(id: number, persona: any): Observable<any>{
    return this.http.put(`apiurl/${id}`, persona);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`apiurl/${id}`);
  }
}