import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { PokemonLabo } from 'src/app/Shared/models/pokemonLabo.model';
import { PokeApiService } from 'src/app/Shared/Services/poke-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  List : {name : string, url : string}[] = []

  pokemon : PokemonLabo
  click : boolean = false
  compteurPokemonMin : number = 0
  compteurPokemonMax : number = 10

  constructor(
    private _pokeService : PokeApiService
  ) { }

  ngOnInit(): void {
    this._pokeService.getAll().subscribe((res : any) => {
      this.List = res.results
    })
  }

  getByUrl(url : string){
    this._pokeService.getByUrl(url).subscribe((res : any) => {
      this.pokemon = res
      this.click = true
    })
  }

  getListPlus(){
    this.compteurPokemonMin += 10
    this.compteurPokemonMax += 10
    this._pokeService.getList(String(this.compteurPokemonMin)).subscribe((res : any) => {
      this.List = res.results
    })
  }

  getListMoins(){
    this.compteurPokemonMin -= 10
    this.compteurPokemonMax = 10
    this._pokeService.getList(String(this.compteurPokemonMin)).subscribe((res : any) => {
      this.List = res.results
    })
  }

  getDetails(){
    //...
  }

}
