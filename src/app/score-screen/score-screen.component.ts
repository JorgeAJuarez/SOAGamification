import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SoundService } from '../sound.service';
import { ApiLeaderboardService } from '../api-leaderboard.service';
import { Score } from '../score-model';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrls: ['./score-screen.component.css']
})
export class ScoreScreenComponent implements OnInit {

  interval: any;
  displayedColumns: string[] = ['name', 'score', 'mode'];
  dataSource = new MatTableDataSource<Score>([]);
  
  constructor(
    private _router: Router, 
    private soundService: SoundService,
    private apiService: ApiLeaderboardService, 
    private _liveAnnouncer: LiveAnnouncer) {
  }

  announceSortChange() {
  }
  
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  startGame(mode:string){
    this.soundService.play('start_ready_go');
    this.interval = setInterval(() => {
      this._router.navigate(['Game', mode]);         
      clearInterval(this.interval);
    }
    ,2000);
  }

  ngOnInit(): void {
    this.apiService.getScores().subscribe(
      result => {
        console.log(result)
        this.dataSource=new MatTableDataSource<Score>(result.leaderboard.sort((a, b) => b.score - a.score));
      }
    )
  }
}
