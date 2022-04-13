import { Component, OnInit } from '@angular/core';
import { ContractorService } from 'src/app/contractor.service';
import { Contractor } from 'src/app/models/contractor.model';

@Component({
  selector: 'app-contractor-entry',
  templateUrl: './contractor-entry.component.html',
  styleUrls: ['./contractor-entry.component.css']
})
export class ContractorEntryComponent implements OnInit {

  contractor: Contractor = {
    contractorName: '',
    isCentralContractor: '',
    whid: 0,
  };
  submitted = false;
  constructor(private api: ContractorService) { }
  ngOnInit(): void {
  }
  saveContractor(): void {
    const data = {
      contractorName: this.contractor.contractorName,
      isCentralContractor: this.contractor.isCentralContractor,
      whid: this.contractor.whid
    };
    this.api.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newContractor(): void {
    this.submitted = false;
    this.contractor = {
      contractorName: '',
      isCentralContractor: '',
      whid: 0
    };
  }

}
