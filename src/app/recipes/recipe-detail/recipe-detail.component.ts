import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input() recipe: Recipe;
  @Output() recipeDetail = new EventEmitter<Recipe>()

  constructor(private recipeService: RecipeService) {
    // this.recipeService.recipeEvent.subscribe((element: Recipe) => {
    //     this.recipeItem = element;
    //     this.recipeDetail.emit(element);
    // })
   }
  ngOnInit(): void {
  }

}
