import { Component, OnInit } from '@angular/core';
import { datas } from '../datas';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  listPerson : {id : number, prenom : string}[] = datas

  constructor() { }

  ngOnInit(): void {
  }

  // permet de supprimer une élément d'une liste
  deleteChildById(id_person : number){
    let indexToDelete = this.listPerson.findIndex((person) => person.id == id_person)
    this.listPerson.splice(indexToDelete, 1)
  }

  // permet de update un élément d'une liste
  updateChildPrenom(updatePerson : {id : number, prenom : string}){
    let indexToUpdate = this.listPerson.findIndex((person) => person.id == updatePerson.id)
    this.listPerson[indexToUpdate].prenom = updatePerson.prenom
  }

  
  triageList(){
    this.listPerson.reverse()
  }
}
