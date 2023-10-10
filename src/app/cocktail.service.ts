import {Injectable} from '@angular/core';
import {Cocktail} from "./cocktail-list/cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [{
    name: "Cocktail au gin, curaçao bleu et citron vert",
    price: 10,
    image: "https://static.cuisineaz.com/680x357/i86103-cocktail-au-gin-curacao-bleu-et-citron-vert.jpg",
  },
    {
      name: "Pétillant au sirop de fruit",
      price: 8,
      image: "https://static.cuisineaz.com/680x357/i93620-petillant-au-sirop-de-fruit.jpg"
    },
    {
      name: "Cocktail de fruits exotics sans alcool",
      price: 9,
      image: "https://static.cuisineaz.com/680x357/i87237-cocktail-de-fruits-exotiques-mangue-et-cerises-sans-alcool.jpeg"
    }
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
