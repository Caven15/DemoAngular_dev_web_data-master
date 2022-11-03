import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Shared/models/pokemon.model';
import { PokeApiService } from 'src/app/Shared/Services/poke-api.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  found : boolean = false
  currentPokemon : Pokemon = new Pokemon
  id : string = ""

  listePoke : {name : string, url : string}[] = []

  pokeDetail : {
    name : string,
    type : any[],
    stat : any[]
  } = {
    name : '',
    type : [],
    stat : []
  }

  constructor(private _pokeService : PokeApiService) { }

  ngOnInit(): void {
    this._pokeService.getAll().subscribe((res : any) => {
      console.log(res)
      this.listePoke = res.results
    })
  }


  getByUrl(url : string){
    this._pokeService.getByUrl(url).subscribe((res : any) => {
      this.currentPokemon = res
      console.log("-------------------------")
      console.log(res.sprites)
      console.log("-------------------------")
      this.found = true
    })
  }

  // Demos next, error, Complete
  // getTest(id : string){
  //   this._pokeService.getById(id).subscribe({
  //     next : (data) => {
  //       // je récupère mes données
  //     },
  //     error : (error) => {
  //       // si ma requete plante je rentre ici...
  //       console.log(error)
  //     },
  //     complete : () => console.log("requette aboutie !")
  //   })
  // }

}
