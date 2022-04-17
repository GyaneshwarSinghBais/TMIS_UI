import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent implements OnInit {

  public form!: FormGroup;
  warehouses = null;
  constructor( private transApi:TransportService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addContractorForm();

    this.transApi.getAllWarehouses().subscribe((data)=>{
      this.warehouses = data;
    });

    console.log(this.warehouses);
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
        //console.log(res);
      },
      error: (e) => console.error(e)
    });
  }

}
