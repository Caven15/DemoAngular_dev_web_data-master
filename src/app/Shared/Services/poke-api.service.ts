import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  baseUrl : string = "https://pokeapi.co/api/v2"

  listePoke : {name : string, url : string}[] = []


  constructor(private _http : HttpClient) { }

  getByUrl(url : string){
    return this._http.get<any>(url)
  }

  getAll(){
    return this._http.get<any[]>(`${this.baseUrl}/pokemon?offset=0&limit=15`)
  }

  getList(startIndex : string){
    return this._http.get<any[]>(`${this.baseUrl}/pokemon?offset=${startIndex}&limit=15`)
  }

}
