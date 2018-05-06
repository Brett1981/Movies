import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Movie } from './movie.model'
import { RankCount } from './movie.model'

@Injectable()
export class MovieService {

  selectedMovie: Movie;
  movieList: Movie[];
  groupedList : RankCount[];
  visibilityList: boolean = true;
  visibilityEdit: boolean = false;
  visibilityAdd: boolean = false;
  visibilityRating: boolean = false;

  constructor(private http: Http) { }

  postMovie(movie: Movie) {
    var body = JSON.stringify(movie);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://41.185.94.19:54000/api/Movies', body, requestOptions).map(x => x.json());
  }

  putMovie(id, movie) {
    var body = JSON.stringify(movie);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://41.185.94.19:54000/api/Movies/' + id,
      body,
      requestOptions).map(x => x.json());
  }

  getMovieList() {
    this.http.get('http://41.185.94.19:54000/api/Movies')
      .map((data: Response) => {
        return data.json() as Movie[];
      }).toPromise().then(x => {
        this.movieList = x;
      })
  }

  deleteMovie(id: number) {
    return this.http.delete('http://41.185.94.19:54000/api/Movies/' + id).map(res => res.json());
  }

  getMovieRank(){
    this.http.get('http://41.185.94.19:54000/api/MovieRanking')
      .map((data: Response) => {
        return data.json() as RankCount[];
      }).toPromise().then(x => {
        this.groupedList = x;
      })
  }

  groupBy(objectArray, property){
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  countObjects(array){
    array.reduce(function (allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
  }

}
