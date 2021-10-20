import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  @Output() startEvent = new EventEmitter<number[]>();
  @Output() stopEvent = new EventEmitter<number[]>();


  gameTimes: number[] = [];

  constructor() { }

  ngOnInit(): void {



  }

  onStartGame(event){
    this.gameTimes.push(event.timeStamp);
    this.startEvent.emit(this.gameTimes);

  }



  onStopGame(){
    this.stopEvent.emit(this.gameTimes);
  }

}
