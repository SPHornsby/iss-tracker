import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NextPasses } from '../app.component';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.component.html',
  styleUrls: ['./passes.component.css']
})
export class PassesComponent implements OnInit {
  
  errorMessage: string;
  passes: NextPasses[];
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getAstronauts();
  }

  getAstronauts() {
    this.dataService.getPasses()
                    .subscribe(
                      passes => this.passes = passes,
                      error => this.errorMessage = <any>error
                    )
  }
}
