import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()



export class SpotifyService {

urlBase:string = "https://api.spotify.com/v1/";
token:string='BQAbw52PpEWjD-bRNrWD6D5_1c1pJBi4aKpXc8kmoc8ccFwPvbg7zpjqao3InNSN2C8JHIy2VJwa5uBiIFE';
artistas:any[]= [];
artista: any;


  constructor(public http: HttpClient) { }

private getHeaders():HttpHeaders{

  let head = new HttpHeaders({
    'Authorization':'Bearer '+this.token
  });

  return head
}

getArtistas( parametro:string):any {
  //let headers = new HttpHeaders({
  //  'Authorization':'Bearer BQDVN5zsylr3gagellxJLCWnt6sVru24JoqfNS3ELizVVEd4kIXqZ5W6QbxkR2MIiBwWpcm0CbxVkRu17eA'
  //});
    let urlSearch = `search?q=${parametro}&type=artist`;
    let url= this.urlBase + urlSearch;

return  this.http.get( url, { headers:this.getHeaders() } )
  .map((resp:any)=> {
    this.artistas= resp ;
  return resp});


}



getArtista( id:string):any {
  /*let headers = new HttpHeaders({
    'Authorization':'Bearer BQDVN5zsylr3gagellxJLCWnt6sVru24JoqfNS3ELizVVEd4kIXqZ5W6QbxkR2MIiBwWpcm0CbxVkRu17eA'
  });*/
    let query = `artists/${id}`;
    let url= this.urlBase + query;

return  this.http.get( url, { headers:this.getHeaders() } );
  /*.map((resp:any)=> {
    this.artista= resp ;
  return resp});*/


}
  }
