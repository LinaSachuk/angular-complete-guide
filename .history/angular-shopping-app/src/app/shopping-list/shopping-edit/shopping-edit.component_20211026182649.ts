import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true});
  @ViewChild('amountInput', {static: true});

  nameInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){

  }
}
