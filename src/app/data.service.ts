import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Astronaut, NextPasses, CurrentLocation } from './app.component';

@Injectable()
export class DataService {
  // URL to get current ISS personnel
  private peopleUrl = 'http://api.open-notify.org/astros.json';
  // URL to get ISS passes from lat/long
  private passesUrl = 'http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&callback=JSONP_CALLBACK';
  // URL to get ISS passes from lat/long
  private customPassesUrl = 'http://api.open-notify.org/iss-pass.json?';
  // URL to get current ISS location (overhead)
  private locationUrl = 'http://api.open-notify.org/iss-now.json';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getPeople(): Observable<Astronaut[]> {
    return this.http.get(this.peopleUrl)
                    .map((res:Response) => res.json().people)
                    .catch(this.handleError);
  }
  getCustomPasses(lat, lon): Observable<NextPasses[]> {
    return this.jsonp.get(this.customPassesUrl + `lat=${lat}&lon=${lon}&alt=20&callback=JSONP_CALLBACK`)
               .map((res:Response) => res.json().response)
               .catch(this.handleError);
  }
  getPasses(): Observable<NextPasses[]> {
    return this.jsonp.get(this.passesUrl)
               .map((res:Response) => res.json().response)
               .catch(this.handleError);
  }
  getCurrentPosition(): Observable<CurrentLocation> {
    return this.http.get(this.locationUrl)
               .map((res:Response) => res.json())
               .catch(this.handleError);
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
    return Observable.throw(errMsg);
  }
}
