import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

artistas:any[]= [];

urlBusqueda:string = "https://api.spotify.com/v1/search";
  constructor(public http: HttpClient) { }

  getArtistas( parametro:string){

  let headers = new HttpHeaders({
    'Authorization':'Bearer BQDyfe_-T5T2kelJ3BYTwn43BdJb5LXiORM7T4wLC8yXSmU1Rg75FojCtD8Lr1UOoTVYTSWwRMTn6bS0kmGhEw'
  });
    let query = `?q=${parametro}&type=artist`;
    let url= this.urlBusqueda + query;
    console.log(url);
    return this.http.get( url, { headers } )
                .map((resp:any)=>{
                  this.artistas = resp;
                    return this.artistas;
                });

}
  }
