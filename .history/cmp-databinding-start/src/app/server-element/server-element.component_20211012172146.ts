import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked , OnDestroy {
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

ngDoCheck(){
  console.log("ngDoCheck called.")
}

ngAfterContentInit(){
  console.log("ngAfterContentInit called.")
}

ngAfterContentChecked(){
  console.log("ngAfterContentChecked called.")
}

ngAfterViewInit(){
  console.log("ngAfterViewInit called.")
}

ngAfterViewChecked(){
  console.log("ngAfterViewChecked called.")
}

ngOnDestroy(){
  console.log("ngOnDestroy called.")
}

}
