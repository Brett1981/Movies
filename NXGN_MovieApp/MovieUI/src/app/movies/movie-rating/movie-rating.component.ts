import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service'
import { Movie } from '../shared/movie.model'
import { RankCount } from '../shared/movie.model'

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieRank();
  }

  onNavigate() {
    this.movieService.visibilityAdd = false;
    this.movieService.visibilityList = true;
    this.movieService.visibilityEdit = false;
    this.movieService.visibilityRating = false;
  }
}
