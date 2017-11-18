
import {bindable,bindingMode,autoinject} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@autoinject
export class Weather {

  public header = 'weather';

 weather;
  loaded;


  @bindable woeid: string;
  @bindable data;
  vid: string;


  constructor(private http: HttpClient) {}


  go(woeid){
      this.http.fetch('https://www.metaweather.com/api/location/'+woeid+'/')
      .then(response => response.json())
      .then(weather => {
          this.weather = weather;
          this.loaded = true
          console.log(this.weather);
      });
    }

}