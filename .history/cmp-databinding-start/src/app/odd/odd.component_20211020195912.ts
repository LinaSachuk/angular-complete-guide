import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

@Input() time: number;

odd:boolean;


  constructor() { }

  ngOnInit(): void {
    if(this.time % 2 === 0){
  console.log('math:', this.time % 2);
      this.odd = false;
    }else{
      this.odd=true;
    }
  }







}
