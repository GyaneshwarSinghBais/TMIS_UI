import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RcserviceService } from 'src/app/services/rcservice.service';

@Component({
  selector: 'app-rccreate',
  templateUrl: './rccreate.component.html',
  styleUrls: ['./rccreate.component.css']
})
export class RccreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private rcservice:RcserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      tenderId: new FormControl('', [Validators.required]),
      vtypeId: new FormControl('', Validators.required),
      basePrice: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      finalRateWithGST: new FormControl('', Validators.required),
      rCstartDate: new FormControl('', Validators.required),
      rcEndDate: new FormControl('', Validators.required)

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.rcservice.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/tender/tenderindex');
    })
  }

}
