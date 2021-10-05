import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverCreated= new EventEmitter<{type:string, name: string, content: string}>();
  blueprintCreated= new EventEmitter<{type:string, name: string, content: string}>();

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

}
