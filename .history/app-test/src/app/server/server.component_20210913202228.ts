import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[
    `.online {
      color: white
    }
    `
  ]

})
export class ServerComponent {
serverId = 10;
serverCreated = false;
serverStatus: string = 'offline';
serverName = 'FirstServer';
serverCreationStatus = 'No server was created!';
servers = ['TestServer', 'TestServer2'];

getServerStatus(): string{
  return this.serverStatus;
}

onCreateServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
}

}
