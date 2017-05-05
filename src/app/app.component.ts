import { Component } from '@angular/core';

export class Astronaut {
  craft: string;
  name: string;
}
export class NextPasses{
  duration: number;
  risetime: number;
}
export class ParsedPasses{
  duration: number;
  risetime: Date;
}
export class CurrentLocation {
    iss_position: {latitude: string, longitude: string};
    timestamp: number;
    message: string;
}
export class SunTimes {
  sunrise: string;
  sunset: string;
  day_length: string;
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sky Watcher';
}
