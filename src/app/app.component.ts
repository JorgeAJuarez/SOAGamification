import { Component} from '@angular/core';
import { SoundService } from './sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SOAGamification';
  sound :boolean = true;
  constructor(private soundService: SoundService) { }

  ngOnInit(){    
    this.soundService.init();
  }

  togleSound(){
    this.sound=!this.sound
    this.soundService.togleSound();
  }
}



