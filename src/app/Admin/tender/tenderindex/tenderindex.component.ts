import { Component, OnInit } from '@angular/core';
import { TenderserviceService } from 'src/app/services/tenderservice.service';

@Component({
  selector: 'app-tenderindex',
  templateUrl: './tenderindex.component.html',
  styleUrls: ['./tenderindex.component.css']
})
export class TenderindexComponent implements OnInit {
  tenders: any[] = [];
  constructor(public tenderService:TenderserviceService) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData(){
    this.tenderService.getAll().subscribe((data: any[]) => {
      this.tenders = data;
      console.log(this.tenders);
    });

  }


  deletePost(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.tenderService.delete(id).subscribe((res) => {
        this.tenders = this.tenders.filter((item) => item.id !== id);
        console.log('Post deleted successfully!');
        alert('Deleted Successfully!');
        this.fetchData();
      });


    }
  }

}
