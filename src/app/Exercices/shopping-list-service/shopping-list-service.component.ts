import { Component, OnInit } from '@angular/core';
import { ShoppinListServiceService } from 'src/app/Shared/Services/shoppin-list-service.service';

@Component({
  selector: 'app-shopping-list-service',
  templateUrl: './shopping-list-service.component.html',
  styleUrls: ['./shopping-list-service.component.scss']
})
export class ShoppingListServiceComponent implements OnInit {


  constructor(private _shopping : ShoppinListServiceService) { }

  itemArticle : string
  nombreArticle : number
  data : {nom : string, nb : number}[] = this._shopping.shoppingList

  ngOnInit(): void {
  }

  push() {
    var article = {nom : this.itemArticle, nb : this.nombreArticle}
    this._shopping.pushTab(article)
    console.log("nombre d'élément dans la liste " + this.data.length)
  }

  delete(item) {
    this._shopping.delete(item)
  }
}
