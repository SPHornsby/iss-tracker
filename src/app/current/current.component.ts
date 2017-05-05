import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CurrentLocation } from '../app.component';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  errorMessage: string;
  currentLocation: CurrentLocation;
  latitude: string;
  longitude: string;
  timestamp: Date;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getCurrent();
    this.repeat();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  intervalId = 0;
  clearTimer() { clearInterval(this.intervalId); }

  private repeat() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.getCurrent();
    }, 5000)
  }
  getCurrent() {
    this.dataService.getCurrentPosition()
                    .subscribe(
                      (currentLocation) => {
                        this.longitude = currentLocation.iss_position.longitude;
                        this.latitude = currentLocation.iss_position.latitude;
                        this.timestamp = new Date(currentLocation.timestamp * 1000);
                      },
                      error => this.errorMessage = <any>error
                    )
  }
}
