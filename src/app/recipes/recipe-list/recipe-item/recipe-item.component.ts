import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDeleted = new EventEmitter<string>();
  @ViewChild('recipeName') recipeNameRef: ElementRef;

  constructor() {}

  ngOnInit() {}

  onDeleteRecipe() {
    console.log('LOG', this.recipeNameRef);
    this.recipeDeleted.emit(this.recipe.name);
  }

}
