import { Component, OnInit } from '@angular/core';
import { ContractorService } from 'src/app/contractor.service';

@Component({
  selector: 'app-show-vhicle-type',
  templateUrl: './show-vhicle-type.component.html',
  styleUrls: ['./show-vhicle-type.component.css']
})
export class ShowVhicleTypeComponent implements OnInit {
  vhicleTypes = null;
  constructor(private api: ContractorService) { }

  ngOnInit(): void {
    this.api.getAllVhicleType().subscribe((data)=>{
      this.vhicleTypes = data;
    });
  }

}
