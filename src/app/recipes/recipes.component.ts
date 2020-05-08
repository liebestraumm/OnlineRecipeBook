import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }
  
  recipeElement: Recipe;

  onSideBarContent(item: Recipe) {
      this.recipeElement = item;
  }

  ngOnInit(): void {
  }

}
