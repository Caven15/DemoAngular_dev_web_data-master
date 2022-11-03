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
  compteurPokemon : number = 0

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
    this.compteurPokemon += 15
    this._pokeService.getList(String(this.compteurPokemon)).subscribe((res : any) => {
      this.List = res.results
    })
  }

  getListMoins(){
    this.compteurPokemon -= 15
    this._pokeService.getList(String(this.compteurPokemon)).subscribe((res : any) => {
      this.List = res.results
    })
  }

}
