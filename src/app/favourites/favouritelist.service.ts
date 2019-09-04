import { Injectable } from '@angular/core';
import { WishList } from '../WishList';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouritelistService {
  public jsonUrl = 'http://localhost:3004/posts/';
  constructor(private http:HttpClient) { }

  getWishListData(){
    return this.http.get('http://localhost:3004/posts');
  }

  deleteFav(movieId){
    let movieUrl = `${this.jsonUrl}${movieId}`;
    return this.http.delete(movieUrl,{headers: new HttpHeaders({'Content-Type': 'application/json' })});

  }

  updateList(movie){
    let movieUrl = `${this.jsonUrl}${movie.id}`;
    return this.http.put(movieUrl,movie,{headers: new HttpHeaders({'Content-Type': 'application/json' })});
  }
}
