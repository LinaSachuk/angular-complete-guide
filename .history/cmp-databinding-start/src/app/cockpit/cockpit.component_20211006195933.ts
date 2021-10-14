import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement): void {
    console.log(this.serverContentInput)
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement): void {
    // this.blueprintCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // })
  }

}