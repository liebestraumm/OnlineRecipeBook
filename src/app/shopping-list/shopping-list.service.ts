import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    shoppingEditEvent = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingEditEvent.emit(this.ingredients.slice());
    }
}