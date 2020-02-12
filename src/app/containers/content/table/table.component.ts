import { Component, OnInit } from '@angular/core';
import { Bets } from 'src/app/interfaces/bets';
import { BetService } from 'src/app/services/bet.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  teams: Bets[] = [];

  constructor(private betService: BetService) { }

  ngOnInit() {

    this.betService.getBets().subscribe((data) => {
      for (const team of data) {
        this.teams.push(team);
      }
    });
  }

}
