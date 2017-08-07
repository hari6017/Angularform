import {Component} from '@angular/core';

@Component({

      selector : 'my-app',
      template: `
      <div>
    <nav>
   <a routerLink='/register'>Register</a>
   <a routerLink = '/players'>players</a>
   </nav>
   <router-outlet></router-outlet>
   </div>
 `
 })

export class AppComponent{

 title = "Registration page";
}
