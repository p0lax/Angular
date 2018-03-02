import { findIndex } from 'lodash';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a recipe!', 'https://cdn.pixabay.com/photo/2017/10/20/17/45/goulash-2872112_960_720.jpg'),
    new Recipe('Recipe 2', 'This is a recipe!', 'https://cdn.pixabay.com/photo/2017/10/20/17/45/goulash-2872112_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeDeleted(name: string) {
    const position: number = findIndex(this.recipes, { name });
    this.recipes.splice(position, 1);
  }

}
