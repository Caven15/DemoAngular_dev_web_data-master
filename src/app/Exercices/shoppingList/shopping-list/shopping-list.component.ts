import { Component, OnInit } from '@angular/core';
import { donnee } from '../donnee';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  listeArticle : {nom : string}[] = donnee
  item : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  // suppression d'un élément de la ma liste
  deleteByName(nom_article : string){
    let index = this.listeArticle.findIndex((a) => a.nom == nom_article)
    this.listeArticle.splice(index, 1)
  }

  addItem(){
    this.listeArticle.push({nom : this.item})
    console.log(this.item)
  }
}
