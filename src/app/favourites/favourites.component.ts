import { Component, OnInit } from '@angular/core';
import { WishList } from '../WishList';
import { FavouritelistService } from './favouritelist.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  public wishlist : WishList[];
  public jsonUrl = 'http://localhost:3004/posts/';
  public edit = false;
  public editComment ;
  constructor(private _fav : FavouritelistService, private http : HttpClient, private router: Router) { }

  ngOnInit() {
    this.getWishList();
  }

  getWishList(){
    this._fav.getWishListData().subscribe(_list => this.wishlist = _list as WishList[]);
  }
  
  removeFromFav(movie){
    this._fav.deleteFav(movie.id).subscribe(()=>this.ngOnInit());
   }

   onSelect(movie){
    this.router.navigate(['/movie',movie.id]);
   }

   addComment(comment,movie){
     if(comment==""){
        return;
     }
      movie.comments = comment;
      this._fav.updateList(movie).subscribe(this.ngOnInit);
   }

   editCommentPush(comment,movie){
      movie.comments = comment;
      this._fav.updateList(movie).subscribe(this.ngOnInit);
   }

   showEdit(movie){
      this.edit = true;
      this.editComment = movie.comments;
   }

   doneEdit(){
     this.edit = false;
   }
}
