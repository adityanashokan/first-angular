import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private http:HttpClient) { }
  private url = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'fdd1f7bb0b7818bea91cd0ccb50def4e';

  getSearch(searchQuery): any{
    let searchUrl = `${this.url}?api_key=${this.apiKey}&query=${searchQuery}`;
    return this.http.get(searchUrl);
  }
}
