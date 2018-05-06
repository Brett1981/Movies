import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service'
import { Movie } from '../shared/movie.model'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchText = '';
  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit() {
    this.movieService.getMovieList();
  }

  showForEdit(movie: Movie) {
    this.movieService.visibilityAdd = false;
    this.movieService.visibilityList = false;
    this.movieService.visibilityEdit = true;
    this.movieService.selectedMovie = Object.assign({}, movie);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete the record ?') == true) {
      this.movieService.deleteMovie(id)
        .subscribe(x => {
          this.movieService.getMovieList();
          this.toastr.warning('Deleted successfully', 'Entertainment');
        })
    }
  }

  onNavigate() {
    this.movieService.visibilityAdd = true;
    this.movieService.visibilityList = false;
    this.movieService.visibilityEdit = false;
    this.movieService.visibilityRating = false;
  }

  onRating(){
    this.movieService.visibilityAdd = false;
    this.movieService.visibilityList = false;
    this.movieService.visibilityEdit = false;
    this.movieService.visibilityRating = true;

    
  }
}
