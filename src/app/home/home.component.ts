import { Component, OnInit } from '@angular/core';
import { PopMoviesService } from './pop-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public popMovies;
  constructor(private _popMovies : PopMoviesService, private router: Router) { }

  ngOnInit() {
    this._popMovies.getPopMovies().subscribe(_popData => this.popMovies = _popData);
  }

  onSelect(popMovie){
    this.router.navigate(['/movie',popMovie.id]);
  }

  onSearch(searchQuery){
    this.router.navigate(['/search',searchQuery]);
  }
}
