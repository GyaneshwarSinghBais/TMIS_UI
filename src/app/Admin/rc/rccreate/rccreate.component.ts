import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RcserviceService } from 'src/app/services/rcservice.service';
import { TenderserviceService } from 'src/app/services/tenderservice.service';
import { VhicleService } from 'src/app/services/vhicle.service';

@Component({
  selector: 'app-rccreate',
  templateUrl: './rccreate.component.html',
  styleUrls: ['./rccreate.component.css'],
})
export class RccreateComponent implements OnInit {
  form!: FormGroup;
  tenders = null;
  vhicles = null;
  gstList = [0, 5, 12, 18, 28];

  constructor(
    private rcservice: RcserviceService,
    private tenderservice: TenderserviceService,
    private vhicleserivce: VhicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      tenderId: new FormControl('', [Validators.required]),
      vtypeId: new FormControl('', Validators.required),
      basePrice: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      finalRateWithGST: new FormControl('', Validators.required),
      rCstartDate: new FormControl('', Validators.required),
      rcEndDate: new FormControl('', Validators.required),
    });

    this.tenderservice.getAll().subscribe((res) => {
      this.tenders = res;
    });

    this.vhicleserivce.getAll().subscribe((res) => {
      this.vhicles = res;
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.rcservice.create(this.form.value).subscribe((res: any) => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/tender/tenderindex');
    });
  }
}
