import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.movieService.selectedMovie = {
      ID: null,
      Name: '',
      Category: '',
      Rank: null
      //DELETED : null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ID != null) {
      //update
      this.movieService.putMovie(form.value.ID, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.movieService.getMovieList();
          this.movieService.getMovieRank();
          this.toastr.info('Record updated successfully', 'Entertainment');
          this.movieService.visibilityAdd = false;
          this.movieService.visibilityList = true;
          this.movieService.visibilityEdit = false;
        })
    }
  }

  onNavigate() {
    this.movieService.visibilityAdd = false;
    this.movieService.visibilityList = true;
    this.movieService.visibilityEdit = false;
    this.movieService.visibilityRating = false;
  }
}
