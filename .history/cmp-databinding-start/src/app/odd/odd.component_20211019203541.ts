import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

@Input() time: number;

odd:boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.time = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.time)
   this.oddOrEven(this.time);

  }
oddOrEven(num){
    if(num % 2 != 0){
      this.odd = true;

    }
    console.log(this.odd)

    return this.odd;
}
}
