import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'description for panna cotta ',
      'https://www.liveeatlearn.com/wp-content/uploads/2019/11/vegetarian-panna-cotta-vert-500x375.jpg',
      [new Ingredient('Sugar', 1), new Ingredient('Milk', 4)]
    ),
    new Recipe(
      'A test recipe 2',
      'description for panna cotta 2',
      'https://www.sugarsaltmagic.com/wp-content/uploads/2019/04/Vanilla-Panna-Cotta-with-Orange-Syrup-FB2.jpg',
      [new Ingredient('Orange', 1), new Ingredient('Cream', 4)]
    ),
    new Recipe(
      'A test recipe 3',
      'description for panna cotta 3',
      'https://www.thelittleepicurean.com/wp-content/uploads/2019/08/coconut-panna-cotta-latik-1.jpg',
      [new Ingredient('Apple', 10), new Ingredient('Sugar', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
