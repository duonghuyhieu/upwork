import { Component, OnInit } from '@angular/core';
import { WorkApiService } from 'src/app/core/services/work-api.service';
import { work } from 'src/app/data/work';

@Component({
  selector: 'app-freelance-jobs',
  templateUrl: './freelance-jobs.component.html',
  styleUrls: ['./freelance-jobs.component.scss']
})
export class FreelanceJobsComponent implements OnInit {
  dataFromApi: work[] = [];

  constructor(private workApi: WorkApiService) {}
  ngOnInit() {
    this.workApi.getAllWorks().subscribe(data => {
      this.dataFromApi = data;
      this.filterData = data;
    });
  }
  filterData: work[] = [];


changeType(type : number){
  switch (type ) {
    case 0:
      this.filterData = this.dataFromApi
      break;
    case 1:
      this.filterData = this.dataFromApi.filter(w => w.type == 1);
      break;
    case 2:
      this.filterData = this.dataFromApi.filter(w => w.type == 2);
      break;
    case 3:
    this.filterData = this.dataFromApi.filter(w => w.type == 3);
      break;
    case 4:
      this.filterData = this.dataFromApi.filter(w => w.type == 4);
break;
case 5:
  this.filterData = this.dataFromApi.filter(w => w.type == 5);
  break;
  case 6:
    this.filterData = this.dataFromApi.filter(w => w.type == 6);
    break;
    case 7:
this.filterData = this.dataFromApi.filter(w => w.type == 7);
break;
case 8:
  this.filterData = this.dataFromApi.filter(w => w.type == 8);
  break;
    default:
      break;
  }
}
}

