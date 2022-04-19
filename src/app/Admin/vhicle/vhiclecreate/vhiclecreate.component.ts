import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VhicleService } from 'src/app/services/vhicle.service';

@Component({
  selector: 'app-vhiclecreate',
  templateUrl: './vhiclecreate.component.html',
  styleUrls: ['./vhiclecreate.component.css']
})
export class VhiclecreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    public vhicleService:VhicleService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      vtypename: new FormControl('', [Validators.required]),
      storeVType: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vhicleService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/vhicle/vhicleindex');
    })
  }

}
