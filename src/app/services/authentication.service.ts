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

  getFinalData(){
    var loggintoken = localStorage.getItem('token')||'';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var finaldata = JSON.parse(_atobdata);
    return finaldata;
  }

  //Admin
  HaveAccess(){
    var finaldata =this.getFinalData();
    if(finaldata.role == 'AD'){    //admin
      return true;
    }
   //alert('You not having access');
   console.log('Yo not having access, Only Admin');
   return false;
  }

   //Warehouse
   HaveAccessWarehouse(){
    var finaldata =this.getFinalData();
    if(finaldata.role == 'WH'){    //warehouse
      return true;
    }
   console.log('Yo not having access, Only Warehouse');
   return false;
  }

  //Finance
  HaveAccessFinance(){
    var finaldata =this.getFinalData();
    if(finaldata.role == 'FI'){    //finance
      return true;
    }
   console.log('Yo not having access, Only Finance');
   return false;
  }


  getRole(){
    var finaldata =this.getFinalData();
    return finaldata.role;
  }

  getUserName(){
    var finaldata =this.getFinalData();
    return finaldata.unique_name;
  }

  proceedLogout(){
    localStorage.removeItem('token');
    localStorage.clear();
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
