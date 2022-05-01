import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RCclass } from '../models/rcclass.model';

@Injectable({
  providedIn: 'root'
})
export class RcserviceService {

  private apiURL = "https://localhost:44322/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/RC')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllbyDTO(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/RC/GetRCsDTo')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(post:any): Observable<any> {

    return this.httpClient.post(this.apiURL + '/RC/', JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/RC/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, post:any): Observable<any> {

    return this.httpClient.put(this.apiURL + '/RC/' + id, JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/RC/' + id, this.httpOptions)

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
