import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'fdd1f7bb0b7818bea91cd0ccb50def4e';
  private jsonUrl = 'http://localhost:3004/posts/';

  getMovie(movieId): any{
    let movieUrl = `${this.url}${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(movieUrl);
  }

  checkFav(movieId){
    let favUrl = `${this.jsonUrl}${movieId}`;
    return this.http.get(favUrl);
  }
}
