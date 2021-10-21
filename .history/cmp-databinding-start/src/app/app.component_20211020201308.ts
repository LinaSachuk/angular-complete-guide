import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name:"testServer", content: "Just a test server"}];
  startGameTime: number;
  odd:boolean;
  even:boolean;

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
    console.log('times:', this.startGameTime);
    if(timeStamp % 2 === 0){
      let p = (timeStamp % 2);
      console.log('math:', p);
      this.even = true;
      this.odd=false;

    }else{
      this.even = false;

      this.odd=true;
    }
    console.log(this.even);
  }

  onStopGame(timeStamp: number[]){
    this.startGameTime = 0;
  }

  onChangeFirst(){
    this.serverElements[0].name="Changed"
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

}
