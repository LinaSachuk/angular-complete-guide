import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(event){
    this.startEvent.emit(event.timeStamp);
    console.log('Start', event.timeStamp)
  }

  onStopGame(){
    console.log('Stop game')
  }

}
