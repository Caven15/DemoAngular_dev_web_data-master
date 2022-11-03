import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() nom : string = ""

  @Output() clickOnDelete : EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  // Appel de l'évenement delete
  suppression(nom : string){
    this.clickOnDelete.emit(nom)
  }
}
