import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,FormsModule,ReactiveFormsModule
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
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
    console.log(this.form.value);

    if (this.form.value.userName == 'admin' || this.form.value == 'admin') {
      this.router.navigate(['../adminHome']);
    } else {
      alert('Incorrect Credentials');
    }

    // this.transApi.create(this.form.value)
    // .subscribe({
    //   next: (res) => {
    //     //console.log(res);
    //   },
    //   error: (e) => console.error(e)
    // });
  }
}
