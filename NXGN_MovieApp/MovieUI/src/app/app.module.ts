import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ToastrModule } from 'ngx-toastr';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component' ;
import { DataTablesModule } from 'angular-datatables';
import { SearchfilterPipe } from './movies/searchfilter.pipe';
import { MovieRatingComponent } from './movies/movie-rating/movie-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieListComponent,
    MovieEditComponent,
    SearchfilterPipe,
    MovieRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
