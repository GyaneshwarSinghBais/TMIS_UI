import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleFIGuard implements CanActivate {
  constructor(private service:AuthenticationService, private route:Router){

  }

  canActivate() {
    if(this.service.HaveAccessFinance()){
      return true;
    }else{
      this.route.navigate(['/FinanceHomeComponent']);
      return false;
    }

  }

}
