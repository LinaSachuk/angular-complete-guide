import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false})nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false})amountInputRef: ElementRef;
  @Output() ingredients = new EventEmitter<{name:string, amount:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){

  }
}
