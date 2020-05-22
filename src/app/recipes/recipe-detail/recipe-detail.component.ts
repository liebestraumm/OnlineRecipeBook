import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
    // this.recipeService.recipeEvent.subscribe((element: Recipe) => {
    //     this.recipeItem = element;
    //     this.recipeDetail.emit(element);
    // })
   }

   sendIngredients(ingredient: Ingredient[]){
      this.shoppingListService.showIngredients(ingredient);
   }
  ngOnInit(): void {
  }

}
