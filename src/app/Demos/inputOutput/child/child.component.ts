import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() id : number = 0
  @Input() prenom : string = ""

  @Output() clickOnChildDelete : EventEmitter<number> = new EventEmitter<number>()

  @Output() clickOnChildUpdatePrenom : EventEmitter<{id : number, prenom : string}> = new EventEmitter<{id : number, prenom : string}>()

  trigerInputName : boolean = false
  newPrenom : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe(id_person : number){
    this.clickOnChildDelete.emit(id_person)
  }

  showInput(prenom : string){
    this.newPrenom = prenom
    this.trigerInputName = !this.trigerInputName
  }

  saveOnParent(id_person : number){
    this.clickOnChildUpdatePrenom.emit({id : id_person, prenom : this.newPrenom})
  }

}
