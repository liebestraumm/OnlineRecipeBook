import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
    
    new Recipe("Nuevo", "Es nuevo marico", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"),
    new Recipe("Arroz con pollo mamaguevo!. Igualito como el que preparo el cara e pizza!", "Velga, eta vaina me recuelda aquel dia que le quitamos la caltera a la vieja el cono esa", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/sausage-kale-gnocchi-one-pot.jpg"),
    new Recipe("Nuevo", "Es nuevo marico", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg")
    
    ];

    @Output() recipeContent = new EventEmitter<Recipe>();
    onRecipeList(item: Recipe) {
        this.recipeContent.emit(item);
    }

  constructor() { }
  ngOnInit(): void {
  }

}
