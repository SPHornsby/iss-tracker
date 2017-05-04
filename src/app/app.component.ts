import { Component } from '@angular/core';

export class Astronaut {
  craft: string;
  name: string;
}
export class NextPasses{
  duration: number;
  risetime: number;
}
export class CurrentLocation {
    iss_position: {latitude: string, longitude: string};
    timestamp: number;
    message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISS Stuff!';
}
