import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', "description for panna cotta ", "https://www.liveeatlearn.com/wp-content/uploads/2019/11/vegetarian-panna-cotta-vert-500x375.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
