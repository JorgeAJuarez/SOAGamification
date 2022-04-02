import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent} from './main-screen/main-screen.component';
import { ScoreScreenComponent} from './score-screen/score-screen.component';
import { GameScreenComponent} from './game-screen/game-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'Score', component: ScoreScreenComponent },  
  { path: 'Game/:mode', component: GameScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
