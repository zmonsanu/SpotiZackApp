import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

artistas:any[]= [];

urlBusqueda:string = "https://api.spotify.com/v1/search";
  constructor() { }

  getArtistas( parametro:string){
    let query = `q=${parametro}&type=artist`;
    let url= this.urlBusqueda + query;

  }

}
