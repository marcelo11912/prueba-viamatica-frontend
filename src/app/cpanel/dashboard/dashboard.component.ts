import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor (private AppService: AppService) {
    this.AppService.sidebar('dashboard-item');
  }

  ngOnInit(): void {
      
  }
}
