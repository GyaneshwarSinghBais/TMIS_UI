import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  responsedata: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private apiService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.doLogin();
  }

  doLogin() {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password');
  }

  onClickSubmit() {
    if (this.form.valid) {
      this.apiService.doLogin(this.form.value).subscribe(
        (result: any) => {
          if (result != null) {
            this.responsedata = result;
            console.log(this.responsedata);
            localStorage.setItem('token', this.responsedata);
            if (this.apiService.getRole() == 'AD') {
              this.router.navigate(['../adminHome']);
            } else if (this.apiService.getRole() == 'WH') {
              this.router.navigate(['../warehousehome']);
            } else if (this.apiService.getRole() == 'FI') {
              this.router.navigate(['../financehome']);
            }
          }
        },
        (error) => {
          alert('You have entered wrong credentials');
        }
      );
    }
  }
}
