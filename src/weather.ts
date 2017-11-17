
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


  go(data){
   
    if(typeof data === 'object'){
      this.weather = data;
      this.loaded = true
    }else{
     var woeid = data;
      this.http.fetch('https://www.metaweather.com/api/location/'+woeid+'/')
      .then(response => response.json())
      .then(weather => {
          this.weather = weather;
          this.loaded = true
          console.log(this.weather);
      });
    }
  
  };

  // max(){


  //   var data = this.weather.consolidated_weather;

  //  return Math.max.apply(Math,data.map(function(o){return o.max_temp;}))
     

  // }
  // min(){
  //     var data = this.weather.consolidated_weather;

  //      return Math.max.apply(Math,data.map(function(o){return o.min_temp;}))
         
  //     }
}