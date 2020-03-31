import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipes.model";
import { RecipeService } from '../../recipe.service';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  @Input() index: number;
 
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.index);
  }

}
