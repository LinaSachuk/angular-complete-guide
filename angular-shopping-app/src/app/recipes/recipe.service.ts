import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'description for panna cotta ',
      'https://www.liveeatlearn.com/wp-content/uploads/2019/11/vegetarian-panna-cotta-vert-500x375.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'description for panna cotta 2',
      'https://www.sugarsaltmagic.com/wp-content/uploads/2019/04/Vanilla-Panna-Cotta-with-Orange-Syrup-FB2.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
