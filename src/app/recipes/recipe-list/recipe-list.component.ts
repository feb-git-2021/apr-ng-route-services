import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:any[] = [
    new Recipe('Test-Recipe',45.67,'It is just a test recipe','./assets/images/recipe1.jpeg'),
    new Recipe('Healthy-Breakfast',100,'It is just a test recipe','./assets/images/recipe2.jpeg'),
    new Recipe('New-Recipe',17.78,'It is a trial recipe','./assets/images/recipe2.jpeg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
