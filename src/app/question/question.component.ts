import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input() question:any;
  @Output() resultQuestion = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.question)
  }    

  nextQuestion(event:any) {
    console.log(event);    
    document.querySelector('.answer[name=true]')!.classList.add('green-button');
    setTimeout(() => {
      this.resultQuestion.emit(event);
    }, 1000);
  }
}

