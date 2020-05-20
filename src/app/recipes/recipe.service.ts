import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {

    private recipes: Recipe[] = [
    
        new Recipe("Nuevo", 
                    "Es nuevo mamaguevo", 
                    "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",
                    [new Ingredient("apple", 5), new Ingredient("tomato", 2), new Ingredient("cheese", 1)]),
        new Recipe("Arroz con pollo mamaguevo!. Igualito como el que preparo el cara e pizza!", 
                    "Velga, eta vaina me recuelda aquel dia que le quitamos la caltera a la vieja el cono esa", 
                    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/sausage-kale-gnocchi-one-pot.jpg",
                    [new Ingredient("cereal", 4), new Ingredient("aji", 3), new Ingredient("mondongo", 1)]),
        new Recipe("Nuevo", 
                    "Es nuevo marico", 
                    "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",
                    [new Ingredient("cambur", 2), new Ingredient("calne", 5)])
        
        ];
    
    recipeEvent = new EventEmitter<Recipe>();

    getRecipes() {
            return this.recipes.slice(); //Returns a deep copy of the array recipes
        }
    
}