import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
@Input("srvElement") element: {type:string, name: string, content: string}
 @Input() name: string;

  constructor() {
     console.log('in the constructor.')
                 }
ngOnChanges(changes: SimpleChanges): void {
  console.log('in the ngOnChanges.')

}

  ngOnInit(): void {
    console.log('in the ngOnInit.')}



}
