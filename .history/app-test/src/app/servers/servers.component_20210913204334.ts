import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus='No server was created!'
  serverName = '';
  userName = "";
  show=true;


  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  resetUserName(){
    if(this.userName){
      this.userName =""
    }
  }

  onButtonClick(){
    this.show = !this.show;
  }
}
