import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',component : HomeComponent },
  {path:'home',component : HomeComponent },
  {path: 'favourites', component : FavouritesComponent},
  {path: 'movie/:id', component : MovieComponent},
  {path : 'search/:name', component : SearchComponent},
  {path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, FavouritesComponent, MovieComponent, SearchComponent, PageNotFoundComponent]
