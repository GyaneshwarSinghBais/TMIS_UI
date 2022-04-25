import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RcserviceService } from 'src/app/services/rcservice.service';
import { TenderserviceService } from 'src/app/services/tenderservice.service';
import { VhicleService } from 'src/app/services/vhicle.service';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rcedit',
  templateUrl: './rcedit.component.html',
  styleUrls: ['./rcedit.component.css'],
})
export class RceditComponent implements OnInit {
  id!: number;
  ratecontract!: any;
  form!: FormGroup;
  tenders!: any;
  vhicles = null;
  gstList = [0, 5, 12, 18, 28];

  constructor(
    public rcservice: RcserviceService,
    public tenderservice: TenderserviceService,
    public vhicleserivce: VhicleService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['rcid'];

    this.bindRateContract();

    this.form = this.fb.group({
      rcId: ['', [Validators.required]],
      tenderid: ['', [Validators.required]],
      vtypeId: ['', [Validators.required]],
      basePrice: ['', [Validators.required]],
      gst: ['', [Validators.required]],
      finalRateWithGST: ['', [Validators.required]],
      rCstartDate: ['', [Validators.required]],
      rcEndDate: ['', [Validators.required]],
    });

    this.bindTenders();
    this.bindVhicles();

    //this.form.setValue({rcId: '1', tenderid: '12',vtypeId: '2',basePrice: '100',gst : '18',finalRateWithGST:'112',rCstartDate:'2021-11-12',rcEndDate:'2022-01-01'  });
  }

  ngAfterViewInit() {}

  get f() {
    return this.form.controls;
  }

  get rcId() {
    return this.form.get('rcId');
  }

  get tenderid() {
    return this.form.get('tenderid');
  }

  get vtypeId() {
    return this.form.get('vtypeId');
  }

  get basePrice() {
    return this.form.get('basePrice');
  }

  get gst() {
    return this.form.get('gst');
  }

  get finalRateWithGST() {
    return this.form.get('finalRateWithGST');
  }

  get rCstartDate() {
    return this.form.get('rCstartDate');
  }

  get rcEndDate() {
    return this.form.get('rcEndDate');
  }

  bindTenders() {
    this.tenderservice.getAll().subscribe((res) => {
      this.tenders = res;
    });
  }

  bindVhicles() {
    this.vhicleserivce.getAll().subscribe((res) => {
      this.vhicles = res;
    });
  }

  bindRateContract() {
    this.rcservice.find(this.id).subscribe((data: any) => {
      this.ratecontract = data;
      console.log(this.id);
      console.log(this.ratecontract);
      this.setValue();
    });
  }

  submit() {
    console.log(this.form.value);
    this.rcservice.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('/tc/rcindex');
    });
  }

  setValue() {
    console.log('set value');

    var datePipe = new DatePipe("en-US");
    this.form.setValue({
      rcId: this.ratecontract.rcId,
      tenderid: this.ratecontract.tenderId,
      vtypeId: this.ratecontract.vtypeId,
      basePrice: this.ratecontract.basePrice,
      gst: this.ratecontract.gst,
      finalRateWithGST: this.ratecontract.finalRateWithGST,
      rCstartDate:datePipe.transform(this.ratecontract.rCstartDate, 'yyyy-MM-dd'),
      rcEndDate: datePipe.transform(this.ratecontract.rcEndDate, 'yyyy-MM-dd'),
    });
  }
}
