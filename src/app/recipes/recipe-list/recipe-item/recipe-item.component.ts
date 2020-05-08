import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() recipe: Recipe;
  @Output() recipeEvent = new EventEmitter<Recipe>();
  onClickedElement(element: Recipe) {
     this.recipeEvent.emit(element);
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
