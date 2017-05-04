import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ParsedPasses } from '../app.component';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {
  
  errorMessage: string;
  passes: ParsedPasses[];
  duration: number;
  timestamp: Date;
  constructor(private dataService:DataService) { }
  latitude: number;
  longitude: number;

  ngOnInit() {
    this.setDefaultPosition();
    this.getPasses();
  }
  setDefaultPosition(){
    this.latitude = 28.5729;
    this.longitude = 80.6490;
  }
  getPasses() {
    this.dataService.getCustomPasses(this.latitude, this.longitude)
                  .subscribe(
                    passes => this.passes = passes.map(pass => ({duration: pass.duration, risetime: new Date(pass.risetime * 1000)})),
                    error => this.errorMessage = <any>error
                  )
  }
  setLocation(lat, lon) {
    console.log(lat, lon);
    this.latitude = lat;
    this.longitude = lon;
    this.getPasses();
  }
  refreshPasses() {
    console.log('refreshing passes');
    this.getPasses();
  }
}
