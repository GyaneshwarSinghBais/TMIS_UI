import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-contractorindex',
  templateUrl: './contractorindex.component.html',
  styleUrls: ['./contractorindex.component.css']
})
export class ContractorindexComponent implements OnInit {
  contractors: any[] = [];
  constructor(private transportservice:TransportService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.transportservice.getAllContractor().subscribe((data: any[]) => {
      this.contractors = data;
      console.log(this.contractors);
    });
  }

  deletePost(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.transportservice.delete(id).subscribe((res) => {
        this.contractors = this.contractors.filter((item) => item.id !== id);
        console.log('Post deleted successfully!');
        alert('Deleted Successfully!');
        this.fetchData();
      });
    }
  }

}
