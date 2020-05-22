import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;
  onClickedElement(element: Recipe) {
     this.recipeService.recipeEvent.emit(element);
  }



    // Or I could've just pass no parameters since the for loop inside the recipe-list-component has each
    //recipe item I want:
  // @Output() recipeEvent = new EventEmitter<void>();
  // onClickedElement() {
  //     this.recipeEvent.emit();
  //  }
  //on recipe-item-component.html: (click)="onClickedElement()"
  
  ngOnInit(): void {
  }

}
