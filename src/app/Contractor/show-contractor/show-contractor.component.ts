import { Component, OnInit } from '@angular/core';
import { ContractorService } from 'src/app/contractor.service';

@Component({
  selector: 'app-show-contractor',
  templateUrl: './show-contractor.component.html',
  styleUrls: ['./show-contractor.component.css']
})
export class ShowContractorComponent implements OnInit {
  contractors = null;
  constructor(private api: ContractorService) { }

  ngOnInit(): void {
     this.api.getAllContractor().subscribe((data)=>{
       this.contractors = data;
});
  }

}
