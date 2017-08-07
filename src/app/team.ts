import {Component} from '@angular/core';
import {PLAYER} from './players';
import {player} from './data';
@Component({
selector : 'my-team',
template : `<div>
<form>
<label for = "Playername">Playername</label>
<input type = "text" class="form-control" name = "pname" id = "pname" placeholder = "Enter Player name"  [(ngModel)]="playername" required = "true"  #name = "ngModel" >
<div class = "radio">
<label><input type = "radio" name = "optradio" [(ngModel)]="ptype" value = "Batsman">Batsman</label>
</div>
<div class = "radio">
<label><input type = "radio" name = "optradio" [(ngModel)]="ptype" value = "Bowler">Bowler</label>
</div>
<div class = "radio">
<label><input type = "radio" name = "optradio" [(ngModel)]="ptype" value = "AllRounder">AllRounder</label>
</div>
<button (click) = addingplayer()>Add </button>
</form>
</div>`
})

export class Team {
 myteam : PLAYER[] = player;
 playername = "";
 ptype = "";
 addingplayer(){
      var playeradded : PLAYER = new PLAYER();
      playeradded.name = this.playername;
      playeradded.type = this.ptype;
    this.myteam.push(playeradded);
    console.log(this.myteam);
 }
}
