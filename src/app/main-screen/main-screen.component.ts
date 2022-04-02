import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  interval: any;

  constructor(
    private _router: Router, private soundService: SoundService) { }

  startGame(mode:string){
    this.soundService.play('start_ready_go');
    this.interval = setInterval(() => {
      this._router.navigate(['Game', mode]);         
      clearInterval(this.interval);
    }
    ,2000);
  }

  ngOnInit(): void {  }

}
