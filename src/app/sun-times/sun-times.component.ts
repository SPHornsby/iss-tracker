import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SunTimes } from '../app.component';
import { Coords }    from '../shared/coords';

@Component({
  selector: 'app-sun-times',
  templateUrl: './sun-times.component.html',
  styleUrls: ['./sun-times.component.css']
})
export class SunTimesComponent implements OnInit {

  sunTimes: SunTimes;
  latitude: string;
  longitude: string;
  errorMessage: string;
  sunrise: string;
  sunset: string;
  dayLength: string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    
  }
  getSunTimes() {
    this.dataService.getSunTimes(this.latitude, this.longitude)
                    .subscribe(
                      sunTimes => this.mapToValues(sunTimes),
                      error => this.errorMessage = <any>error
                    )
  }
  setLocation(lat, lon) {
    this.latitude = lat;
    this.longitude = lon;
    this.getSunTimes();
  }
  mapToValues(sunTimes) {
    this.sunrise = new Date(Date.parse(sunTimes.sunrise)).toString();
    this.sunset = new Date(Date.parse(sunTimes.sunset)).toString();
    this.dayLength = sunTimes.day_length;
  }
  // Form
  model = new Coords(35, -117);
  
  submitted = false;

  onSubmit(lat, lon) {
    this.submitted = true; 
    this.dataService.getSunTimes(lat ,lon)
                      .subscribe(
                      sunTimes => this.mapToValues(sunTimes),
                      error => this.errorMessage = <any>error
                    )
  }
}
