import { Pipe, PipeTransform } from '@angular/core';
import { MovieService } from './shared/movie.service'
import { Movie } from './shared/movie.model'

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  constructor(private movieService: MovieService) { }

  transform(movies: Movie[], searchText: string) {
    return movies.filter(movie => movie.Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      .concat(movies.filter(movie => movie.Category.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
      .filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
     
  }

}
