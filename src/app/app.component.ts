import {Component} from '@angular/core';

@Component({

      selector : 'my-app',
      template : `
      <div class = "container">
      <form>
      <div class = "form-group has-feedback"  [ngClass]="{ 'has-error' : !name.valid }">
       <label for = "username">Username</label>
      <input type = "text" class="form-control" name = "uname" id = "uname" placeholder = "Enter your id"  [(ngModel)]="uname"  (ngModelChange)="Onsubmit()" required = "true" minlength = 4 maxlength = 8 #name = "ngModel" >
      </div>
      <div *ngIf = "uname.length>=4">
      <div class = "form-group has-feedback"  [ngClass]="{ 'has-error' : !pass.valid }">
       <label for = "password">Password</label>
      <input type = "password" class="form-control" name = "qpass" id = "qpass" placeholder = "Enter your id"  [(ngModel)]="qpass"  (ngModelChange)="Onsubmit()" required = "true" minlength = 4 maxlength = 8 #pass = "ngModel" >
      </div>
      </div>

      <button class = "btn btn-success" [disabled]="check" (click) = Onsubmit()>Submit</button>
      </form>

      </div>`,
})

export class AppComponent{
     name = "Form";
     uname = '';
     qpass = '';
     check = true;
     Onsubmit()
     {
     if(this.qpass.length>=4)
     {
        this.check = false;
     }
     else()
     {
      this.check = true;
     }

     console.log(this.uname.length);
     }

}
