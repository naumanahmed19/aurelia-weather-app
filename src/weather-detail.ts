
import { autoinject, bindable} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


import moment from 'moment';

@autoinject
export class Weather {
    
  loaded;
  weather: '';


  @bindable woid

  constructor(private http: HttpClient) {

   
  }
  activate(params, routeConfig) {
    console.log(params.id);

    return this.http.fetch('https://www.metaweather.com/api/location/'+params.id+'/')
    .then(response => response.json())
    .then(results => {
        this.weather = results;
        this.loaded = true
    });

  }
  
}