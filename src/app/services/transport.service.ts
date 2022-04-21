import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  private baseURL = `https://localhost:44322/api`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAllContractor(): Observable<any> {
    return this.http.get(`${this.baseURL}/Contractor`);
  }

  getAllVhicleType(): Observable<any> {
    return this.http.get(`${this.baseURL}/VhicleType`);
  }

  getAllWarehouses(): Observable<any> {
    return this.http.get(`${this.baseURL}/warehouse`);
  }

  create(data: any): Observable<any> {
    console.log('transport create service');
    console.log(data);
    return this.http.post(`${this.baseURL}/Contractor`, data);
  }

  find(id:number): Observable<any> {

    return this.http.get(this.baseURL + '/Contractor/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }


  update(id:number, post:any): Observable<any> {

    return this.http.put(this.baseURL + '/Contractor/' + id, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.http.delete(this.baseURL + '/Contractor/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }





  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
