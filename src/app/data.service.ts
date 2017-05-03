import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Astronaut, NextPasses, CurrentLocation } from './app.component';

@Injectable()
export class DataService {

  private peopleUrl = 'http://api.open-notify.org/astros.json';  // URL to get current ISS personnel
  private passesUrl = 'http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20' // URL to get ISS passes from lat/long
  constructor(private http: Http) { }
  private locationUrl = 'http://api.open-notify.org/iss-now.json' // URL to get current ISS location (overhead)

  getPeople(): Observable<Astronaut[]> {
    return this.http.get(this.peopleUrl)
                    .map(this.extractPeople)
                    .catch(this.handleError);
  }
  private extractPeople(res: Response) {  
    let body = res.json();
    return body.people || { };
  }
  private extractPasses(res: Response) {  
    let body = res.json();
    return body.responses || { };
  }
  private extractCurrent(res: Response) {  
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
