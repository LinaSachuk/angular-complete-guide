import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
@Input("srvElement") element: {type:string, name: string, content: string}
  constructor() {
     console.log('in the constructor.')
                 }
ngOnChanges(){
  console.log('in the ngOnChanges.')

}

  ngOnInit(): void {
    console.log('in the ngOnInit.')}



}
