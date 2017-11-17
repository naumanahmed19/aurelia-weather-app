import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';


export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'weather/:id',  moduleId: 'weather-detail', name:'weathers' },
      { route: 'search/:keyword',  moduleId: './welcome', name:'search' },
    ]);

    this.router = router;
  }
  
}