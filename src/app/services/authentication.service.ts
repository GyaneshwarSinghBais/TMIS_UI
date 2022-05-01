import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiURL = "https://localhost:44322/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  doLogin(data:any): Observable<any> {

    return this.httpClient.post(this.apiURL + '/User/authentication/',JSON.stringify(data),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token')||'';
  }

  HaveAccess(){
    var loggintoken = localStorage.getItem('token')||'';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var finaldata = JSON.parse(_atobdata);
    if(finaldata.role == 'AD'){    //admin
      return true;
    }
   alert('You not having access');
   return false;
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
