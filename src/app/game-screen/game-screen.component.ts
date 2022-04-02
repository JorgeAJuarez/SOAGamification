import { Component, OnInit, ViewChild, Inject  } from '@angular/core';
import * as myData from '../../assets/questions.json';
import {ClockComponent} from '../clock/clock.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SoundService } from '../sound.service';
import { ApiLeaderboardService } from '../api-leaderboard.service';
import { Config } from '../config_model'
import { Observable } from 'rxjs';
import { Result } from './result.model';

export interface DialogData {
  score: number;
  name: string;
  mode: string;
  results: Array<Result>;
}

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {
  products:  any  = (myData  as  any).default;
  questions: any;
  question: any;
  score: number=0;
  index=0;  
  time: any=0;  
  name:string='';
  config!:Config;
  mode!:string|null;
  results:Result[]=[];
  @ViewChild(ClockComponent ) child: ClockComponent | undefined ; 
  
  constructor(private _snackBar: MatSnackBar, 
    public dialog: MatDialog, 
    private _router: Router,  
    private soundService: SoundService,
    private apiService: ApiLeaderboardService, private route: ActivatedRoute) { }

  nextQuestion(result:boolean){
    this.results.push(
      { name:this.question.question, 
        result:this.question.responses
                .find((x: { correct: boolean; }) => x.correct == true)
                .text, 
        correct:result? 'correcto':'incorrecto'}
        );
    if(result){this.correct();}else{this.wrong();}
    if(this.index<this.products.questions.length){  
      this.index++;
    }else{
      this.index=0;
      this.questions = this.products.questions.sort( () => Math.random() - 0.5);
    }
    this.question=this.questions[this.index];
    this.question.responses=this.question.responses.sort( () => Math.random() - 0.5);    
  }

  correct(){
    this.score+=50    
    this.child?.updateTimer(this.config.bonus); 
    this._snackBar.open('Correcto','', {
      duration: 2000,
      panelClass: ['ok-snackbar']
    });
    this.soundService.play('correcto');
  }

  wrong(){
    this.score-=50    
    this.child?.updateTimer(this.config.penality); 
    this._snackBar.open('Fallo','', {
      duration: 2000,
      panelClass: ['fail-snackbar']
    });        
    this.soundService.play('fallo');
  }

  gameOver(event:any){
    this.soundService.play('gameover');    
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '70%',
      data: {name: this.name, score: this.score, mode: this.mode, results: this.results}
    });  
    dialogRef.afterClosed().subscribe(result => {
      this.apiService.insertScore(result).subscribe(any =>{
        this._router.navigate(['Score']); 
      })               
    });
  }

  ngOnInit(){
    this.questions = this.products.questions.sort( () => Math.random() - 0.5);
    this.question=this.questions[this.index];    
    this.question.responses=this.question.responses.sort( () => Math.random() - 0.5);   
    this.mode = this.route.snapshot.paramMap.get('mode');
    if (this.mode != null) this.config = this.products.config[this.mode];    
    console.log(this.config);    
    this.child?.updateTimer(this.config.initialTime); 
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'app.component.dialog.html',  
  styleUrls: ['./app.component.dialog.css']
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<GameScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

}
