import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(
    private service:AuthenticationService,
    private route:Router
    ) { }

  username!:any;
  role!:any;
  optmizeRole!:any;

  ngOnInit(): void {
    this.username = this.service.getUserName();
    this.role = this.service.getRole();
    this.optRole();


  }

  optRole = ()=>{
    if(this.role == "AD"){
      this.optmizeRole == "ADMIN";
    }else if(this.role == "WH"){
      this.optmizeRole == "WAREHOUSE";
    }else if(this.role == "FI"){
      this.optmizeRole == "FINANCE";
    }
    return this.optmizeRole;
  }

  onLogout() {
    this.service.proceedLogout();
    this.route.navigate(['login']);
   };


}
