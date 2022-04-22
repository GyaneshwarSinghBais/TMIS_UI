import { Component, OnInit } from '@angular/core';
import { RCclass } from 'src/app/models/rcclass.model';
import { RcserviceService } from 'src/app/services/rcservice.service';

@Component({
  selector: 'app-rcindex',
  templateUrl: './rcindex.component.html',
  styleUrls: ['./rcindex.component.css'],
})
export class RcindexComponent implements OnInit {
  ratecontracts: any[] = [];
  constructor(public rcservice: RcserviceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.rcservice.getAll().subscribe((data: any[]) => {
      this.ratecontracts = data;
      console.log(this.ratecontracts);
    });
  }

  deletePost(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.rcservice.delete(id).subscribe((res) => {
        this.ratecontracts = this.ratecontracts.filter((item) => item.id !== id);
        console.log('Post deleted successfully!');
        alert('Deleted Successfully!');
        this.fetchData();
      });
    }
  }
}
