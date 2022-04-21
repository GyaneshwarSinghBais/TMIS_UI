import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent implements OnInit {

  public form!: FormGroup;
  warehouses = null;
  constructor(
    private transApi:TransportService,
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.addContractorForm();

    this.transApi.getAllWarehouses().subscribe((data)=>{
      this.warehouses = data;
    });

    // console.log(this.warehouses);


  }

  addContractorForm() {
    this.form = this.fb.group({
      contractorname: ['', [Validators.required,Validators.minLength(2)]],
      isCentralContractor: ['',[Validators.required]],
      whid: ['',[Validators.required]]
    });
  }

  get f(){
    return this.form.controls;
  }

  get contractorname() {
    return this.form.get('contractorname');
  }
  get isCentralContractor() {
    return this.form.get('isCentralContractor');
  }
  get whid() {
    return  this.form.get('whid');
  }



  onClickSubmit() {
    //console.log(this.form.value);
    //this.transApi.create(this.form.value);

    this.transApi.create(this.form.value)
    .subscribe({
      next: (res) => {
        console.log('befor route');
        this.router.navigateByUrl('/contractor/contractorindex');
        console.log('after route');
      },
      error: (e) => console.error(e)
    });
  }

  changeRadioIsCentral(e:any) {
    console.log(e.target.value);
    if(e.target.value == 'Y'){
      //this.isCentralCont = false;
      //this.form.get('whid')?.disabled;
      console.log(this.form.getRawValue);
    }else{
      //this.isCentralCont = true;
      this.form.get('whid')?.disabled;
    }
  }

}
