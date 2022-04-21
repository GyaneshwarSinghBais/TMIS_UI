import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TenderserviceService } from 'src/app/services/tenderservice.service';

@Component({
  selector: 'app-tenderedit',
  templateUrl: './tenderedit.component.html',
  styleUrls: ['./tenderedit.component.css']
})
export class TendereditComponent implements OnInit {

  id!: number;
  tender!: any;
  form!: FormGroup;

  constructor(
    public tenderservice:TenderserviceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['tenderid'];

    this.tenderservice.find(this.id).subscribe((data: any)=>{
      this.tender = data;
      console.log(this.tender);
    });

    this.form = new FormGroup({
      tenderid: new FormControl('', [Validators.required]),
      tendername: new FormControl('', [Validators.required]),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      isfinalized: new FormControl('', [Validators.required])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.tenderservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/tender/tenderindex');
    })
  }

}
