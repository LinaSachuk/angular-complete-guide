import { Component, Input, OnInit } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

@Input() time: number;


  constructor() { }

  ngOnInit(): void {
    this.time = 0;
  }

}
