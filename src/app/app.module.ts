import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//evita el error: No providers for http
import { HttpModule } from '@angular/http';

//servicios
import {SpotifyService} from './services/spotify.service';

//Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, //evita el error: No providers for http
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
