import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name:"testServer", content: "Just a test server"}];
  startGameTime: number;

  onServerAdded(serverData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onStartGame(timeStamp: number){
    this.startGameTime = timeStamp;
    console.log('times:', this.startGameTime)
  }

  onStopGame(timeStamp: number[]){
    this.startGameTime = 0;
    console.log('times after stop:', this.startGameTime)

  }

  onChangeFirst(){
    this.serverElements[0].name="Changed"
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

}
