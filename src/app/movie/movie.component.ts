import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { WishList } from '../WishList';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FavouritelistService } from '../favourites/favouritelist.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movieId;
  public movie;
  public infav;
  public favmovie;
  public putUrl = 'http://localhost:3004/posts';
  constructor(private _favservice: FavouritelistService,  private _movie: MovieService, private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieId = id;
    this._movie.getMovie(this.movieId).subscribe(_movieData => this.movie = _movieData);
    this._movie.checkFav(this.movieId).subscribe(_checkFav => this.infav = true,error => this.infav = false);
  }

  addToFavs(movie){
    let favMovie :  WishList = new WishList();
    favMovie.id = movie.id;
    favMovie.title = movie.original_title;
    favMovie.poster_path = movie.poster_path;
    favMovie.overview = movie.overview;
    favMovie.comments = [];
    this.http.post(this.putUrl,favMovie,{headers: new HttpHeaders({'Content-Type': 'application/json' })}).subscribe(()=>this.ngOnInit());
  }

  removeFromFav(movie){
    
    this._favservice.deleteFav(movie.id).subscribe(()=>this.ngOnInit());
   }

}
