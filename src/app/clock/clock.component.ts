import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  public timeLeft: number = 100;
  @Output() timeoutEmiter = new EventEmitter<boolean>();
  @Input() initialTime:any;
  interval: any;

  ngOnInit(): void {
    this.timeLeft=this.initialTime;
    this.startTimer()
  }

  setTimer(value:number){
    console.log(value);
    this.timeLeft=value;
  }

  updateTimer(value:number){
    this.timeLeft+=value;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft-=0.03;
      } else {
        this.timeoutEmiter.emit(true);        
        clearInterval(this.interval);
      }
    }, 30)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
