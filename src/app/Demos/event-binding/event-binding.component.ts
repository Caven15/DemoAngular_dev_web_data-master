import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  // Déclaratios d'une variables privée (accessible uniquement a l'interieur de ma classe)
  private compteur = 1
  constructor() { }

  ngOnInit(): void {
  }
  // déclaration méthodes lié a mon événement click
  activationEvent() {
    // j'affiche une phrase dans la console + compteur de click
    console.log("Nombre activation event = " + this.compteur)
    this.compteur++
    }

}
