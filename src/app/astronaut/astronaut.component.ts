import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Astronaut } from '../app.component';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {

  errorMessage: string;
  astronauts: Astronaut[];
  wikiTerms: string[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getAstronauts();
  }

  getAstronauts() {
    this.dataService.getPeople()
                    .subscribe(
                      astronauts => {
                        this.doWikiStuff(astronauts)
                        return this.astronauts = astronauts}
                        ,
                      error => this.errorMessage = <any>error
                    )
                    
  }
  doWikiStuff(stuff) {
    this.wikiTerms = stuff.map((astro) => {
      return {term:astro.name.replace(" ", "_"), name: astro.name};
    })
  }
}
