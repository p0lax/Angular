import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnInit {
  counter = 0;
  timerTask = null;
  @Output() timerHit = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onStopTimer() {
    clearTimeout(this.timerTask);
  }

  onStartTimer() {
    this.timerTask =  setInterval(() => {
      this.counter += 1;
      this.timerHit.emit(this.counter);
    }, 1000);
  }

}
