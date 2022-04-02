import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
      'https://media.istockphoto.com/photos/raspberry-panna-cotta-with-raspberry-jelly-italian-dessert-homemade-picture-id1255776846?k=20&m=1255776846&s=612x612&w=0&h=RFgVYpZfGf4SEgpqkS_ICsegKmv3gw7nsx2dCs1_jDU=',
      [new Ingredient('Apple', 10), new Ingredient('Sugar', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
