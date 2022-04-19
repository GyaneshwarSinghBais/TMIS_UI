import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VhicleService } from 'src/app/services/vhicle.service';

@Component({
  selector: 'app-vhicleview',
  templateUrl: './vhicleview.component.html',
  styleUrls: ['./vhicleview.component.css']
})
export class VhicleviewComponent implements OnInit {


  id!: number;
  vhicle!: any;

  constructor(
    public vhicleService:VhicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['vtypeid'];

    this.vhicleService.find(this.id).subscribe((data: any)=>{
      this.vhicle = data;
    });
  }

}
