import {Component} from '@angular/core';

@Component({

      selector : 'my-form',
      template : `
      <div class = "container">
      <form>
      <div class = "form-group has-feedback"  [ngClass]="{ 'has-error' : !name.valid }">
       <label for = "username">Username</label>
      <input type = "text" class="form-control" name = "uname" id = "uname" placeholder = "Enter your id"  [(ngModel)]="uname" required = "true" minlength = 4 maxlength = 8 #name = "ngModel" >
      </div>
      <div *ngIf = "uname.length>=4">
      <div class = "form-group has-feedback"  [ngClass]="{ 'has-error' : !pass.valid }">
       <label for = "password">Password</label>
      <input type = "password" class="form-control" name = "qpass" id = "qpass" placeholder = "Enter your id"  [(ngModel)]="qpass"   required = "true" minlength = 4 maxlength = 8 #pass = "ngModel" >
      </div>
      </div>
      <div *ngIf = "qpass.length>=4">
      <div class = "radio">
      <label><input type = "radio" name = "optradio" [(ngModel)]="gender" value = "Male">Male</label>
      </div>
      <div class = "radio">
      <label><input type = "radio" name = "optradio" [(ngModel)]="gender" value = "Female">Female</label>
      </div>
      </div>
      <div class = "" *ngIf = "gender">
      <label>Date of Birth<input type = "date" name = "date" [max] = "today" [(ngModel)]="dob"></label>
      </div>
      <button class = "button btn btn-success" [disabled]="!dob" (click) = "Onsubmit()">Submit</button>
      </form>

      </div>`,
})

export class FormComponent{
     name = "Form";
     uname = '';
     qpass = '';
     check = true;
     gender = "";
     dob = "";

    today= new Date().toJSON().split('T')[0];


         Onsubmit()
     {
        console.log(this.today);
     }

}
