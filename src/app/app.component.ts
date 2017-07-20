import {Component} from '@angular/core';

@Component({

      selector : 'my-app',
      template : `
      <div class = "container">
      <form>
      <div class = "form-group has-feedback"  [ngClass]="{ 'has-error' : !name.valid }">
       <label for = "username">Username</label>
      <input type = "text" class="form-control" name = "uname" id = "uname" placeholder = "Enter your id" (keyup)="Onsubmit()" [(ngModel)]="uname"  required = "true" minlength = 4 maxlength = 8 #name = "ngModel" >
      </div>



      <div class = "form-group" *ngIf = "x>=4&&x<=8">
       <label for = "password">Password</label>
      <input type = "password" class="form-control" name = "pass" placeholder = "required" [(ngModel)]="pass"/>
      </div>
      <button class = "btn btn-success" (click) = Onsubmit()>Submit</button>
      </form>

      </div>`,
})

export class AppComponent{
     name = "Form";
     uname = '';
     x = 0;
     Onsubmit()
     {
        this.x = this.uname.length;
     console.log(this.uname.length);
     }
}
