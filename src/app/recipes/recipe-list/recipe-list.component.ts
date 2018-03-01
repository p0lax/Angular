import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a recipe!', 'https://cdn.pixabay.com/photo/2017/10/20/17/45/goulash-2872112_960_720.jpg'),
    new Recipe('Recipe 1', 'This is a recipe!', 'https://cdn.pixabay.com/photo/2017/10/20/17/45/goulash-2872112_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
