import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked , OnDestroy {
@Input("srvElement") element: {type:string, name: string, content: string}
@Input() name: string;
@ViewChild("heading", {static: true}) header: ElementRef;
@ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() {
     console.log('in the constructor.')
                 }
ngOnChanges(changes: SimpleChanges): void {
  // console.log('in the ngOnChanges.')

}

  ngOnInit(): void {
    // console.log('in the ngOnInit.')
    }

ngDoCheck(){
  // console.log("ngDoCheck called.")
}

ngAfterContentInit(){
  // console.log("ngAfterContentInit called.")
  // console.log(this.paragraph.nativeElement.textContent)

}

ngAfterContentChecked(){
  // console.log("ngAfterContentChecked called.")
}

ngAfterViewInit(){
  // console.log("ngAfterViewInit called.")
  // console.log(this.header.nativeElement.textContent)
}

ngAfterViewChecked(){
  // console.log("ngAfterViewChecked called.")
}

ngOnDestroy(){
  console.log("ngOnDestroy called.")
}

}
