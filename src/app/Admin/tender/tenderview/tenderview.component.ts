import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenderserviceService } from 'src/app/services/tenderservice.service';
@Component({
  selector: 'app-tenderview',
  templateUrl: './tenderview.component.html',
  styleUrls: ['./tenderview.component.css']
})
export class TenderviewComponent implements OnInit {

  id!: number;
  tenders!: any;

  constructor(
    public tenderService:TenderserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['tenderid'];

    this.tenderService.find(this.id).subscribe((data: any)=>{
      this.tenders = data;
    });
  }

}
