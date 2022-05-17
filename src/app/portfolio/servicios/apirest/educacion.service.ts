import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class educacionService {


  constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`https://api-rest-portfolio-arpr.herokuapp.com/educacion/get/${id}`);
	}
  getAll(): Observable<any> {
	  return this.http.get(`https://api-rest-portfolio-arpr.herokuapp.com/educacion/get/`);
	}
  //terminar en algun momento
  update(id: number, educacion: any): Observable<any>{
    return this.http.put(`https://api-rest-portfolio-arpr.herokuapp.com/educacion/${id}`, educacion);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`https://api-rest-portfolio-arpr.herokuapp.com/educacion/${id}`);
  }
 save(educacion:any) : Observable<any>{
   return this.http.post(`https://api-rest-portfolio-arpr.herokuapp.com/educacion/`, educacion);
 }
}




// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Url } from 'url';

// @Injectable({
//   providedIn: 'root'
// })
// export class EducacionService {
//   apiurl="https://api-rest-portfolio-arpr.herokuapp.com/educacion/"


//   constructor(private http: HttpClient) {

//   }

//   getById(id: number): Observable<any> {
// 	  return this.http.get(`apiurl/${id}`);
// 	}
//   getAll(): Observable<any> {
// 	  return this.http.get(`apiurl`);
// 	}
//   //terminar en algun momento
//   update(id: number, educacion: any): Observable<any>{
//     return this.http.put(`apiurl/${id}`, educacion);
//   }

//   //terminar en algun momento
//   delete(id: number): Observable<any>{
//     return this.http.delete(`apiurl${id}`);
//   }
//  save(educacion:any) : Observable<any>{
//    return this.http.post(`apiurl`, educacion);
//  }
// }
