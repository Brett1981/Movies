import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

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
    if (form.value.ID == null) {
      //insert
      this.movieService.postMovie(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.movieService.getMovieList();
          this.movieService.getMovieRank();
          this.toastr.success('New record saved successfully', 'Entertainment');
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
