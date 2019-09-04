import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PopMoviesService {
  constructor(private http:HttpClient) { }
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = 'fdd1f7bb0b7818bea91cd0ccb50def4e';
  
  
  getPopMovies(): any{
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=${'en'}`;
    return this.http.get(moviesUrl);
  }
}
