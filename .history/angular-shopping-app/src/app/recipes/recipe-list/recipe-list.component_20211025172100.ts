import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', "description for panna cotta ", "https://www.liveeatlearn.com/wp-content/uploads/2019/11/vegetarian-panna-cotta-vert-500x375.jpg"),
    new Recipe('A test recipe 2', "description for panna cotta 2", "https://www.sugarsaltmagic.com/wp-content/uploads/2019/04/Vanilla-Panna-Cotta-with-Orange-Syrup-FB2.jpg")

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
