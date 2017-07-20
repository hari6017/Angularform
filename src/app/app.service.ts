import {Injectable } from '@angular/core';
import {player} from './data';
import {PLAYER} from './players';
@Injectable()
export class AppService
{
    getPlayers() : PLAYER[]
    {
    return player;
    }
}
