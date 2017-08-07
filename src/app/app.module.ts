import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import {player} from './data';
import {Team} from './team';
import {FormComponent} from './form.component';

import {RouterModule} from '@angular/router';
@NgModule({
  imports:      [ BrowserModule,FormsModule,
  RouterModule.forRoot([{
      path : 'register',
      component : FormComponent
      },
  {
      path : 'players',
      component : Team
      }

  ]) ],
  declarations: [ AppComponent, Team,FormComponent],


  bootstrap:    [ AppComponent]
})
export class AppModule { }
