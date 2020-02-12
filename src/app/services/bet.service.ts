import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Bets } from '../interfaces/bets';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  // iconTeamOne: string;
  // iconTeamTwo: string;
  // nameTeamOne: string;
  // nameTeamTwo: string;
  // winTeamOne: string;
  // draw: string;
  // winTeamTwo: string;
  constructor() { }

  getBets(): Observable<Bets[]> {

    return of([
      {
        iconTeamOne: 'devicon-python-plain',
        iconTeamTwo: 'devicon-php-plain',
        nameTeamOne: 'Python',
        nameTeamTwo: 'PHP',
        winTeamOne: '1.42',
        draw: '2.02',
        winTeamTwo: '1.29',
      },
      {
        iconTeamOne: 'devicon-angularjs-plain',
        iconTeamTwo: 'devicon-backbonejs-plain',
        nameTeamOne: 'AngularJS',
        nameTeamTwo: 'BackboneJS',
        winTeamOne: '1.05',
        draw: '9.12',
        winTeamTwo: '3.25',
      },
      {
        iconTeamOne: 'devicon-java-plain',
        iconTeamTwo: 'devicon-csharp-plain',
        nameTeamOne: 'Java',
        nameTeamTwo: 'C#',
        winTeamOne: '2.89',
        draw: '1.67',
        winTeamTwo: '2.34',
      },
    ]);
  }
}
