
import { autoinject, bindable} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class Weather {
    
  loaded;
  weather: '';

  constructor(private http: HttpClient) {}
  activate(params, routeConfig) {
    return this.http.fetch('https://www.metaweather.com/api/location/'+params.id+'/')
    .then(response => response.json())
    .then(results => {
        this.weather = results;
        this.loaded = true
    });

  }
  
}