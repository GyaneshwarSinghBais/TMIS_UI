import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TenderserviceService } from 'src/app/services/tenderservice.service';

@Component({
  selector: 'app-tendercreate',
  templateUrl: './tendercreate.component.html',
  styleUrls: ['./tendercreate.component.css']
})
export class TendercreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private tenderservice:TenderserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      tendername: new FormControl('', [Validators.required]),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      isFinalized: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.tenderservice.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/tender/tenderindex');
    })
  }

}
