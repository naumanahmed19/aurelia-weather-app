
import {bindable,autoinject} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';


@autoinject
export class Weather {

  public header = 'weather';

  weather;
  loaded;
  @bindable woeid;
  @bindable to: string;
  
  constructor(private http: HttpClient) {}
  speak(): void {
    alert(`Hello ${this.to}!`);
  }
  created() {
  
    console.log(this.woeid)
    return this.http.fetch('https://www.metaweather.com/api/location/'+this.woeid+'/')
    .then(response => response.json())
    .then(weather => {
        this.weather = weather;
        this.loaded = true
        console.log(this.weather);
    });
  }

 

  max(){


    var data = this.weather.consolidated_weather;

   return Math.max.apply(Math,data.map(function(o){return o.max_temp;}))
     

  }
  min(){
      var data = this.weather.consolidated_weather;

       return Math.max.apply(Math,data.map(function(o){return o.min_temp;}))
         
      }
}