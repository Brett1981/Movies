import { Component, OnInit } from '@angular/core';

import { MovieService } from './shared/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

}
