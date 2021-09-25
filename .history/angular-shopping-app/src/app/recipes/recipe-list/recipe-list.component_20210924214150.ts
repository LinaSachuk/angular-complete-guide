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
    new Recipe('A test recipe 2', "description for panna cotta 2", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mckenziesfoods.com.au%2Frecipe%2Fvanilla-pannacotta-with-berry-sauce%2F&psig=AOvVaw1cAcCmdMTHHEH7zArEhnS0&ust=1632627678474000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDxyaCamfMCFQAAAAAdAAAAABAD")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}