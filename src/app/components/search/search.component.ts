import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent implements OnInit {

termino : string ='';
artSearch:any[]= [];


  constructor(private _spotifyService:SpotifyService) {  }
buscarArtista()
{

  if (this.termino.length==0)
  {return;}
    //console.log(this.termino);
   this._spotifyService.getArtistas(this.termino)
  .subscribe(artistas=>{
    //console.log('Informacion lista!');
    console.log(this.termino);
     this.artSearch=artistas;
    console.log(this.artSearch);
   });
}
  ngOnInit() {

  }

}
