import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientRequest } from 'http';
import { Client } from 'src/app/Shared/models/client.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) { }

  submit : boolean = false
  public client : Client = new Client()
  public registerCLient : FormGroup


  ngOnInit(): void {
    this.registerCLient = this._formBuilder.group({
      nom : [null, [Validators.required], Validators.minLength(3)],
      prenom : [null, [Validators.required], Validators.minLength(3)],
      age : [null, [Validators.required], Validators.min(18)],
      dateNaissance : [null, [Validators.required]],
      email : [null, [Validators.required]],
    })
  }

  onSubmit(){
    this.client.nom = this.registerCLient.value['nom']
    this.client.prenom = this.registerCLient.value['prenom']
    this.client.age = this.registerCLient.value['age']
    this.client.dateNaissance = this.registerCLient.value['dateNaissance']
    this.client.email = this.registerCLient.value['email']
    this.registerCLient.reset()
    this.submit = true
  }

}
