import { Injectable } from '@angular/core';
import {NgxHowlerService} from 'ngx-howler'
@Injectable({
  providedIn: 'root'
})
export class SoundService {

  sound :boolean = true;

  constructor(public howl: NgxHowlerService) {
    howl.loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.min.js');
  }

  togleSound(){
    this.sound=!this.sound
  }

  play(sonido:string){
    console.log(sonido);
    if(this.sound){
      this.howl.get(sonido).play();
    }
  }

  init(){    
    this.howl.register('fallo', {
      src: ['../assets/sounds/wrong.wav'],
      html5: true
    }).subscribe(status => {
      console.log(status);
    });
    this.howl.register('correcto', {
      src: ['../assets/sounds/correct.wav'],
      html5: true
    }).subscribe(status => {
      console.log(status);
    });
    this.howl.register('gameover', {
      src: ['../assets/sounds/gameover.wav'],
      html5: true
    }).subscribe(status => {
      console.log(status);
    });
    this.howl.register('start_ready_go', {
      src: ['../assets/sounds/start_ready_go.wav'],
      html5: true
    }).subscribe(status => {
      console.log(status);
    });
  }

}
