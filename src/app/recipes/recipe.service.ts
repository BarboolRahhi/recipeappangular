import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "Tikki Burger",
      "Brugger with  patato tikki in round shape",
      "https://static.wixstatic.com/media/0f82c1_8e843ca4b58b449f843efd496974694f~mv2_d_1920_1280_s_2.jpg/v1/fill/w_560,h_408,al_c,q_80,usm_0.66_1.00_0.01/Drakes_PB%26JBaconBrie.webp",
      [new Ingredient("Mango", 5), new Ingredient("Patato", 9)]
    ),
    new Recipe(
      "HotDog",
      "Big Hotdog with cheess",
      "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2019/10/reason-hotdog-800x450.jpg",
      [new Ingredient("Tea Powder", 2), new Ingredient("Tomato", 3)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  
}