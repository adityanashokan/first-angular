import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchMoviesService } from './search-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchQuery;
  public search;
  constructor(private _search : SearchMoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let sq = this.route.snapshot.paramMap.get('name');
    this.searchQuery = sq;
    this._search.getSearch(this.searchQuery).subscribe(_searchData => this.search = _searchData );
  }

  onSelect(searchObj){
    this.router.navigate(['/movie',searchObj.id]);
  }

}
