import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  private baseURL = `https://localhost:44322/api`


  constructor(private http: HttpClient) { }

  getAllContractor(): Observable<any> {
    return this.http.get(`${this.baseURL}/Contractor`)
 }

 getAllVhicleType(): Observable<any> {
  return this.http.get(`${this.baseURL}/VhicleType`)
}

create(data: any): Observable<any> {
  console.log(data);
  return this.http.post(`${this.baseURL}/Contractor`, data)
}


}
