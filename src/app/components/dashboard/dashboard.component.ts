import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { HTTPServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private httpService: HTTPServiceService) {}

  sensors: any;
  areSensorsLoading: boolean = true;

  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.httpService
      .getSensorItems()
      .pipe(takeUntil(this.ngUnsubscribe), finalize(() => {
        this.areSensorsLoading = false;
      }))
      .subscribe((res: any) => {
        this.sensors =  res.data;
      })
  }
}
