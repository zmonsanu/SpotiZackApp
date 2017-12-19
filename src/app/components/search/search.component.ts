import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent implements OnInit {

termino : string ='';
artSearch:any[]= [];
itemsSearch:any[]=[];


  constructor(private _spotifyService:SpotifyService) {  }
buscarArtista()
{

  if (this.termino.length==0)
  {return;}
    //console.log(this.termino);
  /* this._spotifyService.getArtistas(this.termino)
  .subscribe(artistas=>{
    //console.log('Informacion lista!');
    this.artSearch =artistas;
    console.log(this.termino);
    console.log(artistas);
  });*/
   this._spotifyService.getArtistas(this.termino)
  .subscribe(data=>{
    console.log(this.termino);
    console.log(data);
    for (var prop in data) {

            this.artSearch = data[prop].items;

              for (var item in this.artSearch) {
                    this.itemsSearch.push(this.artSearch[item]);

              }

        }

  })
}
  ngOnInit() {

  }

}
