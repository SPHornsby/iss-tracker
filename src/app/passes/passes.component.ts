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

  ngOnInit() {
    this.getPasses();
  }

  getPasses() {
    this.dataService.getPasses()
                    .subscribe(
                      passes => this.passes = passes.map(pass => {
                        let uts = pass.risetime;
                        
                        let date = new Date(uts * 1000);
                        return {duration: pass.duration, risetime: date};
                      }),
                      error => this.errorMessage = <any>error
                    )
  }
}
