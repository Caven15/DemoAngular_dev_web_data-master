import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppinListServiceService {

  shoppingList : {nom : string, nb : number}[] = []

  constructor() { }

  // Ajoute un élément
  pushTab(article : {nom : string; nb : number}){
    this.shoppingList.push(article)
  }

  // Suppression d'un élément
  delete(nom_article : string){
    let index = this.shoppingList.findIndex((article) => article.nom == nom_article)
    this.shoppingList.splice(index, 1)
  }
}
