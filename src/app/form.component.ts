import {Component} from '@angular/core';


@Component({
selector:'forms',
template :`
UserName<input type="text" [(ngModel)]="name" /><br />
Password<input type ="password" [(ngModel)]="password" /><br />
<button (click) ="clicked2()">Clickit</button>
<div *ngIf = "check1===1">
<h1>{{name}}</h1>
<h2>{{password}}</h2>
</div>`
})

export class Formexe
{
  check1 = 0;
  clicked2()
  {
    this.check1 = 1;
  }
}
