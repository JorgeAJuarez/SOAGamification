import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DialogContentExampleDialog } from './game-screen/game-screen.component';
import { ClockComponent } from './clock/clock.component';
import { ScoreComponent } from './score/score.component';
import { QuestionComponent } from './question/question.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';
import { NgxHowlerService } from 'ngx-howler'

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiLeaderboardService } from './api-leaderboard.service';
import { MatTableModule } from '@angular/material/table'  
import { MatButtonToggleModule } from '@angular/material/button-toggle'
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ScoreComponent,
    QuestionComponent, 
    DialogContentExampleDialog, 
    GameScreenComponent, 
    MainScreenComponent, 
    ScoreScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDialogModule, FormsModule,MatInputModule,
    MatProgressBarModule,BrowserModule,HttpClientModule, MatTableModule, MatButtonToggleModule
  ],
  providers: [NgxHowlerService, HttpClient, ApiLeaderboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
