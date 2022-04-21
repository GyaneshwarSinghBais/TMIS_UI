import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-contractoredit',
  templateUrl: './contractoredit.component.html',
  styleUrls: ['./contractoredit.component.css']
})
export class ContractoreditComponent implements OnInit {

  id!: number;
  contractor!: any;
  form!: FormGroup;


  constructor(
    private transportservice:TransportService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['contractorid'];

    this.transportservice.find(this.id).subscribe((data: any)=>{
      this.contractor = data;
      console.log(this.contractor);
    });

    this.form = new FormGroup({
      contractorid: new FormControl('', [Validators.required]),
      contractorname: new FormControl('', [Validators.required]),
      isCentralContractor: new FormControl('', [Validators.required]),
      whid: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.transportservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/contractor/contractorindex');
    })
  }

}
