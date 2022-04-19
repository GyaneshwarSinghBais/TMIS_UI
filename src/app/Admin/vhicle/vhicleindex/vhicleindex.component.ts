import { Component, OnInit } from '@angular/core';
import { VhicleService } from 'src/app/services/vhicle.service';

@Component({
  selector: 'app-vhicleindex',
  templateUrl: './vhicleindex.component.html',
  styleUrls: ['./vhicleindex.component.css'],
})
export class VhicleindexComponent implements OnInit {
  vhicles: any[] = [];
  constructor(public vhicleService: VhicleService) {}

  ngOnInit(): void {
    this.vhicleService.getAll().subscribe((data: any[]) => {
      this.vhicles = data;
      console.log(this.vhicles);
    });
  }

  deletePost(id: number) {
    if (confirm('Are you sure to delete ')) {
      this.vhicleService.delete(id).subscribe((res) => {
        this.vhicles = this.vhicles.filter((item) => item.id !== id);
        console.log('Post deleted successfully!');
      });
    }
  }
}
