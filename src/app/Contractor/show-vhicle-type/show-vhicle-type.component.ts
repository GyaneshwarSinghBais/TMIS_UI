import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-show-vhicle-type',
  templateUrl: './show-vhicle-type.component.html',
  styleUrls: ['./show-vhicle-type.component.css']
})
export class ShowVhicleTypeComponent implements OnInit {
  vhicleTypes = null;
  constructor(private api: TransportService) { }

  ngOnInit(): void {
    this.api.getAllVhicleType().subscribe((data)=>{
      this.vhicleTypes = data;
    });
  }

}
