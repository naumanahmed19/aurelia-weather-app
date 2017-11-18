
import {bindable,autoinject} from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import {Router, RouterConfiguration} from 'aurelia-router';

@autoinject

export class Welcome {
  
  heading: string = 'Weather';
  woeid;
  locations;
  query: string = '';
  search:boolean=false;
  loaded;
 
  constructor(private http: HttpClient,private router: Router) {
     this.locations = [
      2344116,638242,565346,560743,9807,44418,
    ];
  }

  submit() {
    this.search = true;
    this.heading = 'Search Results';
    this.router.navigate('search/'+ this.query)
    return this.http.fetch('https://www.metaweather.com/api/location/search/?query='+this.query)
    .then(response => response.json())
    .then(res => {
      this.locations =  res.map(function(a) {return a.woeid});
      this.loaded = true
    });
  }
}
