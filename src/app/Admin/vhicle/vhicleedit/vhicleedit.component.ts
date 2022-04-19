import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VhicleService } from 'src/app/services/vhicle.service';

@Component({
  selector: 'app-vhicleedit',
  templateUrl: './vhicleedit.component.html',
  styleUrls: ['./vhicleedit.component.css']
})
export class VhicleeditComponent implements OnInit {

  id!: number;
  vhicle!: any;
  form!: FormGroup;

  constructor(
    public vhicleservice:VhicleService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['vtypeid'];//vtypeid
    this.vhicleservice.find(this.id).subscribe((data: any)=>{
      this.vhicle = data;
    });

    this.form = new FormGroup({
      vtypeid: new FormControl('', [Validators.required]),
      vtypename: new FormControl('', [Validators.required]),
      storeVType: new FormControl('', Validators.required)
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vhicleservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/vhicle/vhicleindex');
    })
  }

}
