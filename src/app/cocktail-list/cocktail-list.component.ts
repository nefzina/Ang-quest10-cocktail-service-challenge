import {Component} from '@angular/core';
import {Cocktail} from "./cocktail.model";
import {CocktailService} from "../cocktail.service";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails: Cocktail[] = []

  constructor(public cocktailService: CocktailService) {
    this.cocktails = cocktailService.getCocktails();

  }
}
