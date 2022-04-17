import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-show-contractor',
  templateUrl: './show-contractor.component.html',
  styleUrls: ['./show-contractor.component.css']
})
export class ShowContractorComponent implements OnInit {
  contractors = null;
  constructor(private api: TransportService) { }

  ngOnInit(): void {
     this.api.getAllContractor().subscribe((data)=>{
       this.contractors = data;
});
  }

}
