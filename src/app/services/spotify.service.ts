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
    'Authorization':'Bearer BQCstc0bRmSjafHA4RUX0pxxFgeLWBjRfA27XfnEsREuMbwRpjaJEO0p2OxlUFNwZc8o7Ga6WbFJfCrP_LbWrg'
  });
    let query = `?q=${parametro}&type=artist`;
    let url= this.urlBusqueda + query;
    //console.log(url);
    return this.http.get( url, { headers } )
                .map((resp:any)=>{
                  this.artistas = resp;
                    return this.artistas;
                });

}
  }
