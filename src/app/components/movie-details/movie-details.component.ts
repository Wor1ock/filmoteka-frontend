import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    if (movieId !== null) {
      this.movieService.getMovieById(+movieId).subscribe(movie => this.movie = movie);
      console.log(this.movie);
    }
  }
}
