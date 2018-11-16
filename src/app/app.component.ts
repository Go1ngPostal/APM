import { Component } from '@angular/core';

@Component({
selector: 'pm-root',
template: `
  <nav class='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class="navbar-nav">
    <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/product']">Product List</a></li>
  </ul>
  </nav>
  <router-outlet></router-outlet>
`

})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
