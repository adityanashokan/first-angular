import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PopMoviesService } from './home/pop-movies.service';
import { MovieService } from './movie/movie.service';
import { SearchMoviesService } from './search/search-movies.service';
import { FavouritelistService } from './favourites/favouritelist.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PopMoviesService, MovieService, SearchMoviesService,FavouritelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
