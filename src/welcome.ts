
import {bindable,autoinject} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import {Router, RouterConfiguration} from 'aurelia-router';

@autoinject

export class Welcome {

  heading: string = 'Welcome to the Aurelia Navigation App';
  query: string = '';
  weathers;
  loaded;
  public locations = [
    2344116,638242,565346,560743,9807,44418,
  ];
;

  constructor(private http: HttpClient,private router: Router) {
 
  }

  submit() {

    this.router.navigate('search/'+ this.query)
    
    return this.http.fetch('https://www.metaweather.com/api/location/search/?query='+this.query)
    .then(response => response.json())
    .then(weather => {
        this.weathers = weather;
        this.loaded = true
        console.log(this.weathers);
    });
    
  }

  some(x){
    return this.heading;
    var num = new Number(x); 
    console.log(num.toString());
 return num.toString();
  }
}
